import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const Panel = ({ isOpen, setIsOpen, title, description }) => {
  return (
    <div className='mt-4 px-4 py-6 bg-white shadow flex flex-col gap-2 items-start'>
      <div className='flex items-center justify-between w-full'>
        <span className='text-lg font-semibold'>{title}</span>
        <button onClick={setIsOpen}>
          {isOpen ? (
            <ChevronUpIcon className='hero-icon text-blue-500 w-5 h-5' />
          ) : (
            <ChevronDownIcon className='hero-icon text-blue-500 w-5 h-5' />
          )}
        </button>
      </div>
      {isOpen && <p>{description}</p>}
    </div>
  );
};

const About = () => {
  const [activePanel, setActivePanel] = useState(0);

  function setCurrentOpenedPanel(index) {
    setActivePanel(activePanel == index ? null : index);
  }

  return (
    <div>
      <h1 className='font-bold text-xl text-center p-5'>Technology stack</h1>
      <div className='mx-4 bg-gray-300'>
        <Panel
          title={'React JS'}
          description={
            'React JS, a popular JavaScript library, empowers developers to build interactive user interfaces for web applications. It offers reusable components, virtual DOM manipulation, and a unidirectional data flow, facilitating efficient and performant rendering.'
          }
          isOpen={activePanel === 0}
          setIsOpen={() => setCurrentOpenedPanel(0)}
        />
        <Panel
          title={'Angular'}
          description={
            'Angular, a comprehensive framework by Google, provides a full suite of tools for building scalable applications. Its robust features include two-way data binding, dependency injection, and a powerful CLI. Angular promotes modularity, testability, and seamless integration with backend services.'
          }
          isOpen={activePanel === 1}
          setIsOpen={() => setCurrentOpenedPanel(1)}
        />
        <Panel
          title={'Vue JS'}
          description={
            'Vue JS, a progressive JavaScript framework, enables developers to build dynamic and intuitive user interfaces. Its simplicity, reactivity, and easy learning curve make it a popular choice. Vue JS offers component-based architecture, declarative rendering, and built-in state management.'
          }
          isOpen={activePanel === 2}
          setIsOpen={() => setCurrentOpenedPanel(2)}
        />
        <Panel
          title={'Next JS'}
          description={
            'Next JS, a React framework, allows developers to build server-rendered React applications effortlessly. It offers features like automatic code splitting, server-side rendering, static site generation, and API routes. Next JS provides excellent performance, SEO optimization, and streamlined development experience with its opinionated conventions and smart defaults.'
          }
          isOpen={activePanel === 3}
          setIsOpen={() => setCurrentOpenedPanel(3)}
        />
      </div>
    </div>
  );
};

export default About;
