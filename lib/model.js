import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {  //在promise对象中，通常有三种状态，分别是pending（进行中）、resolved（已完成）和rejected（已失败）
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.x = 0
        obj.position.y = 0
        obj.rejceiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function(child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.rejceiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function(error) {
        reject(error)
      }
    )
  })
}

