import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-artist-gold selection:text-black">
            <Head title="EL FARAÓN - Artista Profesional" />
            
            {/* Header Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/20">
                <div className="text-2xl font-black tracking-tighter text-artist-gold">FARAÓN</div>
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
                    <a href="#biografia" className="hover:text-white transition-colors">Biografía</a>
                    <a href="#multimedia" className="hover:text-white transition-colors">Multimedia</a>
                    <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
                    {auth.user ? (
                        <Link href={route('dashboard')} className="text-artist-gold">Admin</Link>
                    ) : (
                        <Link href={route('login')} className="px-4 py-2 border border-artist-gold text-artist-gold rounded-full hover:bg-artist-gold hover:text-black transition-all">Ingresar</Link>
                    )}
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden mesh-gradient">
                <img 
                    src="/images/FaraonPerfil.png" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" 
                    style={{ filter: 'grayscale(100%) contrast(150%)' }}
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 text-center px-4">
                    <h2 className="text-artist-gold text-sm font-bold uppercase tracking-[0.5em] mb-4 animate-pulse">Official Website</h2>
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-none">
                        EL <span className="text-artist-gold">FARAÓN</span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                        Redefiniendo el espectáculo musical con ritmos únicos y una puesta en escena de otro nivel.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#contacto" className="group relative px-8 py-4 bg-artist-gold text-black font-bold uppercase tracking-wider rounded-xl hover:scale-105 transition-all">
                            <span>Contratar Ahora</span>
                            <div className="absolute inset-0 -z-10 bg-artist-gold blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        </a>
                        <a href="#multimedia" className="px-8 py-4 glass-morphism font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all border border-white/20">
                            Ver Shows
                        </a>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-10 animate-bounce text-artist-gold opacity-50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
            </section>

            {/* multimedia Section */}
            <section id="multimedia" className="py-24 px-8 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h3 className="text-artist-gold text-xs font-bold uppercase tracking-widest mb-2">Multimedia</h3>
                    <h2 className="text-5xl font-black uppercase tracking-tighter">Últimas Presentaciones</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="aspect-video glass-morphism rounded-3xl overflow-hidden relative border border-white/10">
                        {/* YouTube Embed Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 group cursor-pointer">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4.5 2.688l11.022 7.312-11.022 7.312v-14.624z" /></svg>
                            </div>
                            <span className="absolute bottom-6 font-bold uppercase tracking-widest text-sm opacity-50">Play Live Session</span>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="glass-morphism p-8 rounded-3xl border border-white/10 flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-xl mb-1 text-artist-gold-light">Playlist Oficial</h4>
                                <p className="text-zinc-400 text-sm">Escucha los mayores éxitos en Spotify</p>
                            </div>
                            <div className="text-artist-gold">
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.457 17.306c-.214.351-.671.462-1.022.247-2.822-1.723-6.375-2.112-10.559-1.157-.402.092-.802-.159-.894-.56-.092-.401.159-.801.56-.894 4.582-1.047 8.508-.599 11.668 1.332.351.214.462.671.247 1.032zm1.455-3.264c-.269.438-.841.579-1.279.31-3.228-1.983-8.151-2.559-11.968-1.399-.49.149-1.01-.131-1.159-.621-.149-.491.131-1.01.621-1.159 4.358-1.321 9.776-.681 13.475 1.595.438.27.579.842.31 1.28zm.135-3.39c-3.874-2.3-10.274-2.512-13.999-1.381-.593.18-1.22-.157-1.4-.75s.157-1.22.75-1.4c4.275-1.299 11.337-1.046 15.753 1.573.535.318.708 1.009.39 1.544s-1.009.708-1.544.39z"/></svg>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="glass-morphism aspect-square rounded-3xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4 font-bold uppercase text-xs">Tour 2026</div>
                            </div>
                            <div className="glass-morphism aspect-square rounded-3xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4 font-bold uppercase text-xs">Behind Scenes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* biography Section */}
            <section id="biografia" className="py-24 bg-zinc-900/50">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] bg-zinc-800 rounded-[2rem] overflow-hidden group shadow-2xl">
                             <img 
                                src="/images/FaraonPerfil.png" 
                                alt="Faraón Oficial" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                             />
                             <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 border-[1rem] border-artist-gold rounded-full -z-10 animate-float" />
                    </div>

                    <div>
                        <h3 className="text-artist-gold text-xs font-bold uppercase tracking-widest mb-4">Trayectoria</h3>
                        <h2 className="text-6xl font-black mb-8 leading-none">LA LEYENDA <br />DEL ESCENARIO</h2>
                        <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed mb-8 font-light italic">
                            "Mi música no es solo sonido, es una conexión directa con el alma de quien me escucha."
                        </p>
                        <div className="space-y-6 text-zinc-300">
                            <p>
                                Con más de una década recorriendo los escenarios más importantes, EL FARAÓN ha consolidado su posición como un artista multifacético que rompe barreras entre géneros.
                            </p>
                            <p>
                                Su estilo, caracterizado por una fusión innovadora y letras profundas, le ha permitido cosechar éxitos internacionales y una base de fans leal que trasciende fronteras.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="py-24 px-8 max-w-4xl mx-auto text-center">
                <h3 className="text-artist-gold text-xs font-bold uppercase tracking-widest mb-4">Bookings</h3>
                <h2 className="text-5xl md:text-6xl font-black uppercase mb-12">Hagamos Negocio</h2>
                
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Nombre Completo" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 focus:ring-artist-gold focus:border-artist-gold text-white outline-none transition-all" />
                        <input type="email" placeholder="Email de Contacto" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 focus:ring-artist-gold focus:border-artist-gold text-white outline-none transition-all" />
                    </div>
                    <input type="text" placeholder="Tipo de Evento (Concierto, Privado, etc.)" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 focus:ring-artist-gold focus:border-artist-gold text-white outline-none transition-all" />
                    <textarea rows="4" placeholder="Detalles del mensaje (Fecha, Ubicación)" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 focus:ring-artist-gold focus:border-artist-gold text-white outline-none transition-all"></textarea>
                    <button className="w-full py-5 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-artist-gold transition-all duration-300 transform hover:scale-[1.02]">
                        Enviar Solicitud
                    </button>
                    <p className="text-zinc-500 text-sm mt-4">Nos pondremos en contacto con tu manager en menos de 24 horas.</p>
                </form>
            </section>

            {/* footer */}
            <footer className="py-12 border-t border-white/5 bg-black text-center text-zinc-600 text-sm uppercase tracking-widest">
                &copy; {new Date().getFullYear()} EL FARAÓN. Todos los derechos reservados.
            </footer>

            {/* whatsapp Floating Button */}
            <a 
                href="https://wa.me/yourphone" 
                className="fixed bottom-10 right-10 z-[60] group"
                target="_blank"
            >
                <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-green-500 p-4 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.56.913 3.352 1.395 5.177 1.396 5.446.002 9.874-4.425 9.877-9.874 1.254-2.64.814-5.119-1.078-7.017a9.825 9.825 0 0 0-7.014-2.906c-5.451 0-9.877 4.426-9.881 9.878-.002 1.817.493 3.593 1.431 5.148l-1.074 3.92 4.07-.107c.002-.001.002-.001.002-.001l.487-.128z" /></svg>
                </div>
            </a>
        </div>
    );
}
