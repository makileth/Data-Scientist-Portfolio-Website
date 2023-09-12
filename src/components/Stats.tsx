import React from 'react'
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { title: 'Years in Industry', value: '15+' },
    { title: 'Happy Clients', value: '163+' },
    { title: 'Total Projects', value: '379+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2, // Delay the animation
        staggerChildren: 0.4, // Add a stagger effect
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='flex flex-row items-center justify-center gap-9 py-6'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='items-center flex md:flex-row flex-col py-2 gap-12'
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className='text-center'
          >
            <h4 className='text-white text-[24px] font-semibold'>{stat.title}</h4>
            <h1 className='text-[48px] text-transparent bg-clip-text bg-gradient-to-r  from-orange-500 to-blue-400 font-thin'>{stat.value}</h1>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Stats;
