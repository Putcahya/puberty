
import React from 'react';
import SlideContainer from '../SlideContainer';

const HormoneCard: React.FC<{ title: string; subtitle: string; description: string; color: string; children: React.ReactNode; stats: {label: string; value: string}[]; image?: string }> = ({ title, subtitle, description, color, children, stats, image }) => {
    return (
        <div className={`border-l-4 ${color} bg-white/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            {image && (
                <div className="mb-4 flex justify-center">
                    <img src={image} alt={title} className="h-40 w-40 object-contain" />
                </div>
            )}
            <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full ${color.replace('border', 'bg').replace('-primary', '-primary/20').replace('-secondary', '-secondary/20')}`}>
                    {children}
                </div>
                <div>
                    <h3 className={`text-2xl font-bold ${color.replace('border', 'text')}`}>{title}</h3>
                    <p className="font-semibold text-gray-600">{subtitle}</p>
                </div>
            </div>
            <p className="text-brand-text mb-4 leading-relaxed">{description}</p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                {stats.map(stat => (
                    <div key={stat.label}>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                        <p className={`font-bold text-lg ${color.replace('border', 'text')}`}>{stat.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Slide3: React.FC = () => {
  return (
    <SlideContainer>
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-primary">Kenalan Sama Hormon, Yuk!</h2>
            <p className="text-lg text-gray-600 mt-2">Setelah tahu perubahan fisik, sekarang kita kenali 'sutradara' di baliknya.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <HormoneCard
                title="Testosteron"
                subtitle="Hormon 'Laki-Laki'"
                description="Testosteron adalah &quot;hormon Laki-Laki&quot; yang membuat tubuh laki-laki berubah saat pubertas, seperti membuat otot tumbuh, suara menjadi berat, dan rambut mulai tumbuh di wajah serta tubuh. Tapi yang menarik, hormon ini juga ada di tubuh perempuan, walaupun dalam jumlah kecil."
                color="border-brand-primary"
                image="/images/anggota_tubuh/testosteron_icon.jpg"
                stats={[
                    { label: "Kadar Normal (Laki-laki)", value: "250-1.100 ng/dL" },
                    { label: "Kadar Normal (Perempuan)", value: "8-60 ng/dL" }
                ]}
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </HormoneCard>

            <HormoneCard
                title="Estrogen"
                subtitle="Hormon 'Perempuan'"
                description="Estrogen adalah &quot;hormon Perempuan&quot; yang memicu perubahan seperti pertumbuhan payudara, mulai menstruasi, dan membuat pinggul melebar. Estrogen juga ada pada laki-laki dalam jumlah kecil dan berperan menjaga kesehatan jantung dan metabolisme tubuh mereka."
                color="border-brand-secondary"
                image="/images/anggota_tubuh/esterogen_icon.jpg"
                stats={[
                    { label: "Fungsi Utama", value: "Perkembangan Seksual" },
                    { label: "Kesehatan Tulang", value: "Penting untuk Pria & Wanita" }
                ]}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.874 4.874A8.956 8.956 0 0112 3c2.47 0 4.745.995 6.364 2.614A8.956 8.956 0 0121 12c0 2.47-.995 4.745-2.614 6.364A8.956 8.956 0 0112 21c-2.47 0-4.745-.995-6.364-2.614A8.956 8.956 0 013 12c0-2.47.995 4.745 2.614-6.364z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
            </HormoneCard>
        </div>
         <div className="mt-8 text-center bg-brand-secondary/20 p-4 rounded-lg">
            <p className="text-brand-dark">Jadi, hormon-hormon ini bukan hanya membuat perubahan fisik, tapi juga memengaruhi suasana hati, energi, dan kesehatan tubuh secara keseluruhan. Mereka bekerja seperti <strong className="font-semibold">"dirigen"</strong> yang mengatur banyak bagian tubuh supaya tumbuh dan berfungsi dengan baik.</p>
        </div>
    </SlideContainer>
  );
};

export default Slide3;