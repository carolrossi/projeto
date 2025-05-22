'use client' 

import Header from '../components/Header/header.jsx'
import { useState } from 'react'

export default function HomeAluno() {
    const [showWelcome, setShowWelcome] = useState(true)

    const handleCloseWelcome = () => {
        setShowWelcome(false)
    }

    return (
        <>
{showWelcome && (
    
      <div className="text-3xl font-bold">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between text-[#054068]">
                      <h1>Bem-vindo, Aluno!</h1>
                        <button 
                        onClick={handleCloseWelcome}
                        className=" ml-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                          ×
                         </button>
                  </div>
                  <p className="text-xl mt-2 text-[#054068]">Você está logado.</p>
            </div>
        </div>
    
 )}
            
            <Header />

          <div className='flex justify-center p-10'>
            <div className=' bg-blue-50 rounded-3xl w-200 shadow-2xl text-gray-600 '>
                <h4 className=' flex justify-center font-bold mt-2'>Você possui</h4>
                <h1 className='flex justify-center font-extrabold text-4xl text-[#1d577b]'>3</h1>
                <h4 className=' flex justify-center font-bold mb-2'>faltas no semestre atual</h4>
                <button
                type='submit'
                className='w-full flex justify-center rounded-b-lg bg-[#1d577b] text-white hover:text-gray-400 font-bold p-2'>
                  Verificar minhas faltas
                </button>
            </div>
          </div>

          <div>

          </div>
        </>
    );
}