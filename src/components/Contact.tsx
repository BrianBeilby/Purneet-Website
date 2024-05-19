import { useSectionInView } from '@/lib/hooks';
import React from 'react'

function Contact() {
    const { ref } = useSectionInView("Contact");

  return (
    <section ref={ref} id='contact'>
      Contact
    </section>
  )
}

export default Contact
