import { useState, useEffect, useRef, useCallback } from "react"
import { Box, Spinner } from "@chakra-ui/react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { loadGLTFModel } from "../lib/model"
import * as THREE from 'three'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const [initialCarmeraPosition] = useState(new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    10,
    20 * Math.cos(0.2 * Math.PI)
  ))
  const [scence] = useState(new THREE.Scene())
  const [_camera, setCamera] = useState()
  const [_controls, setControls] = useState()

  const handleWindoeResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        5000
      )
      camera.position.copy(initialCarmeraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.8)
      scence.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      loadGLTFModel(scence, '/dog.glb', {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate()
        setLoading(false)
      })
      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)
        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCarmeraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 2
          camera.position.y = 10
          camera.position.x = p.x * Math.cos(rotSpeed) - p.z * Math.sin(rotSpeed)
          camera.position.z = p.x * Math.sin(rotSpeed) + p.z * Math.cos(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }
        renderer.render(scence, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindoeResize, false)
    return () => {
      window.removeEventListener('resize', handleWindoeResize, false)
    }
  }, [renderer, handleWindoeResize])

  return (
    <Box
      ref={refContainer}
      className="voxel-dog"
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      h={[280, 480, 640]}
      w={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  )
}

export default VoxelDog
