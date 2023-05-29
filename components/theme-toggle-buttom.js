import { IconButton, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from 'framer-motion'

const ThemeToggleButtom = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode='wait'>
      <motion.div style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        eixt={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >

        <IconButton aria-label="Toggle Theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButtom


