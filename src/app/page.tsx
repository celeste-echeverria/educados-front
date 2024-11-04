"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useView } from './context/view-context';

export default function Home() {
  const { view } = useView();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
      <section className="bg-blue-600 text-white py-32 text-center transition duration-300 hover:bg-blue-700">
          <div className="container mx-auto">
            <h2 className="text-6xl font-bold mb-4">
              Bienvenido a Educados
            </h2>
            <p className="text-xl mb-8 max-w-lg mx-auto">
              {view === 'student'
                ? 'La plataforma educativa que revoluciona la forma en que aprendes.'
                : 'La plataforma educativa que te ayuda a enseñar de manera efectiva.'}
            </p>
            <button className="bg-white text-blue-600 font-semibold px-10 py-4 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
              {view === 'student' ? 'Comienza a Aprender' : 'Comienza a Enseñar'}
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-5xl font-bold mb-6">Empezar a Explorar</h3>
            <p className="text-gray-600 mb-8">Descubre todo lo que Educados tiene para ofrecer.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Comunidad Activa", "Aprendizaje Personalizado", "Recursos Ilimitados"].map((feature, index) => (
                <div key={index} className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                  <h4 className="text-3xl font-semibold mb-2">{feature}</h4>
                  <p className="text-gray-700">Próximamente.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-5xl font-bold mb-6">Acerca de Educados</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Educados es una plataforma creada para mejorar la educación y hacerla accesible para todos.
              Nuestro objetivo es proporcionar una experiencia de aprendizaje única y enriquecedora.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-5xl font-bold mb-6">Contáctanos</h3>
            <p className="mb-8">¿Tienes preguntas? Estamos aquí para ayudarte.</p>
            <button className="bg-white text-blue-600 font-semibold px-10 py-4 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
              Escríbenos
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
