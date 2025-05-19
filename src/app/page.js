"use client";
import { useState } from 'react';
import './page.css';

export default function Portal() {
  const [activeForm, setActiveForm] = useState(null);
  const [formData, setFormData] = useState({
    ra: '',
    cpf: '',
    senha: ''
  });

  const handleButtonClick = (formType) => {
    setActiveForm(formType);
    setFormData({ ra: '', cpf: '', senha: '' }); // Limpa os dados ao trocar de formulário
  };

  const handleCloseForm = () => {
    setActiveForm(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeForm === 'aluno') {
      console.log('Login Aluno:', { ra: formData.ra, senha: formData.senha });
    } else {
      console.log(`Login ${activeForm}:`, { cpf: formData.cpf, senha: formData.senha });
    }
  };

  return (
    <div className="overflow-y-hidden h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat flex flex-col">
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

      <div className={`flex flex-col items-center justify-center text-[#1f557b] font-bold text-6xl titulo transition-opacity duration-700 ${activeForm ? 'fade-out' : 'fade-in'} `}>
        <h1 className='text-shadow-lg'>Olá, seja bem vindo!</h1>
        <h4 className='text-2xl'>texto texto texto</h4>
      </div>

      <div className="flex-1 flex flex-col items-center  justify-center pb-70 "> 
        <div className={`transition-opacity duration-700 ${activeForm ? 'fade-out' : 'fade-in'}`}>
        <h1 className='m-5 text-[#1f557b] font-bold text-[18px]'>Escolha abaixo um perfil para acessar.</h1>
      </div>
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
         
          
          <div className="bg-white p-10 rounded-[20px] shadow-2xl w-full max-w-md slide-in  ">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-gray-800">
                {activeForm === 'aluno' && 'Login do Aluno'}
                {activeForm === 'professor' && 'Login do Professor'}
                {activeForm === 'coordenacao' && 'Login da Coordenação'}
              </h3>
              <button 
                onClick={handleCloseForm}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {activeForm === 'aluno' ? (
                <div>
                  <label htmlFor="ra" className="block text-sm font-medium text-gray-700">
                    Registro do Aluno (R.A.)
                  </label>
                  <input
                    type="text"
                    id="ra"
                    name="ra"
                    value={formData.ra}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                    CPF
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                    placeholder="000.000.000-00"
                  />
                </div>
              )}

              <div>
                <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-[#1f557b] rounded-[10px] cursor-pointer hover:bg-[#0e3754] transition-all duration-300  "
                >
                  Acessar
                </button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              {activeForm === 'aluno' ? (
                <p>Problemas com seu R.A.? Entre em contato com a secretaria.</p>
              ) : (
                <p>Esqueceu sua senha? Redefina através do e-mail institucional.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
