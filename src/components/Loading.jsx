import { motion } from "framer-motion";

export const Loading = ({
  size = "md",
  color = "#3B82F6",
  fullscreen = false,
  text,
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const circleVariants = {
    initial: { scale: 0, opacity: 0.5 },
    animate: {
      scale: [0, 1, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const LoadingContent = () => (
    <div className="relative">
      <motion.div
        className={`${sizes[size]} relative mx-auto`}
        variants={containerVariants}
        animate="animate"
      >
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute inset-0"
            variants={circleVariants}
            initial="initial"
            animate="animate"
            style={{
              border: `4px solid ${color}`,
              borderRadius: "50%",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </motion.div>
      {text && (
        <motion.p
          className="text-center mt-4 text-sm font-medium text-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <motion.div
        className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center"
        variants={backdropVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <LoadingContent />
      </motion.div>
    );
  }

  return <LoadingContent />;
};
