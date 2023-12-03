import { motion } from 'framer-motion'

export default function FramerButton({
  tailwindClasses = '',
  onClickFunction,
  children,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClickFunction}
      className={tailwindClasses}
    >
      {children}
    </motion.button>
  )
}
