"use client";
import { useState } from 'react';
import './page.css'

export default function Portal() {
  const [activeForm, setActiveForm] = useState(null);

  const handleButtonClick = (formType) => {
    setActiveForm(formType);
  };

  const handleCloseForm = () => {
    setActiveForm(null);
  };

  return (
    <div className="overflow-y-hidden h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat flex flex-col">
      {/* Cabeçalho */}
      <div className="pr-8 flex justify-end items-center">
        <div className="flex items-center gap-4">
          <img src="./logo2.png" width={150} alt="Logo" />
          <span className="h-14 w-1 bg-[#1f557b]"></span>
          <h2 className="text-[#1f557b] text-2xl font-bold">
            <span className="block">Centro Educacional</span>
            <span className="block">Prof. Tereza Costa</span>
          </h2>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center text-[#1f557b] font-extrabold text-4xl'>

        <h1>Olá, seja bem vindx!!</h1>
        <h4 className='text-2xl'>já bla bla</h4>
      </div>


      {/* Área principal centralizada */}
      <div className="flex-1 flex flex-col items-center justify-center pb-20"> {/* Adicionei pb-20 para dar espaço na parte inferior */}
        <h1 className='m-5 text-[#1f557b] font-extrabold text-[18px]'>Escolha abaixo um perfil para acessar.</h1>
        {!activeForm ? (
          <div className="flex gap-10">
            <button 
              onClick={() => handleButtonClick('aluno')}
              className="w-40 h-20 bg-white rounded-[10px] cursor-pointer hover:bg-blue-200 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1" 
              type="button"
            >
              Aluno
            </button>
            <button 
              onClick={() => handleButtonClick('professor')}
              className="w-40 h-20 bg-white rounded-[10px] cursor-pointer hover:bg-blue-200 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1" 
              type="button"
            >
              Professor
            </button>
            <button 
              onClick={() => handleButtonClick('coordenacao')}
              className="w-40 h-20 bg-white rounded-[10px] cursor-pointer hover:bg-blue-200 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1" 
              type="button"
            >
              Coordenação
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md mx-auto"> {/* Adicionei mx-auto para centralizar horizontalmente */}
            {/* Restante do código dos formulários permanece igual */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                {activeForm === 'aluno' && 'Formulário do Aluno'}
                {activeForm === 'professor' && 'Formulário do Professor'}
                {activeForm === 'coordenacao' && 'Formulário da Coordenação'}
              </h3>
              <button 
                onClick={handleCloseForm}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Formulários... */}
          </div>
        )}
      </div>
    </div>
  );
}