import { useSectionInView } from '@/lib/hooks';
import React from 'react';

function About() {
    const { ref } = useSectionInView("About", 0.5);

    return (
        <section
            ref={ref}
            id='about'
            className='mt-28 mx-auto max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 min-h-screen flex flex-col justify-center items-center'
        >
            <h2 className="text-3xl font-medium capitalize mb-8">
                About me
            </h2>
            <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. {" "}
                <span className="font-medium">Lorem </span>, 
                  ipsum dolor sit amet, consectetur adipiscing elit. 
                  Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque 
                  enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.{" "}
                <span className="font-medium">
                  Fusce luctus vestibulum augue ut aliquet
                </span>
                    .Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
                  Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper 
                  ipsum dignissim ac.{" "}
                <span className="font-medium">software engineering or web developer role</span>.
            </p>

            <p className="mb-3">
                <span className="italic">In at libero sed nunc venenatis imperdiet sed ornare turpis.</span>, 
                Donec vitae dui eget tellus gravida venenatis. {" "}
                <span className="font-medium"> Integer fringilla congue eros non fermentum. </span>. Sed dapibus pulvinar{" "}
                <span className="font-medium">pulvinar nibh tempor</span>. porta.
            </p>
        </section>
    );
}


export default About;
