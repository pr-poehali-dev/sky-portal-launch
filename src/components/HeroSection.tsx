import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/2989192d-caaf-4998-8795-b958afe179e1/files/97191753-a538-46a9-b98b-a64e9f2884d2.jpg',
  'https://cdn.poehali.dev/projects/2989192d-caaf-4998-8795-b958afe179e1/files/daba310f-49b1-4a96-81b5-553db119474c.jpg',
  'https://cdn.poehali.dev/projects/2989192d-caaf-4998-8795-b958afe179e1/files/bf1a6586-0764-47e7-b98c-1922d8a92f37.jpg',
  'https://cdn.poehali.dev/projects/2989192d-caaf-4998-8795-b958afe179e1/files/6cf3e3fc-3e66-4631-9db8-a5f88ce50818.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">
            {/* Logo mark */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-none border-2 border-white/60 shadow-2xl flex items-center justify-center bg-black/40">
                <span className="text-white text-4xl font-bold tracking-tighter">T</span>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-5">
                <p className="text-4xl font-light text-white md:text-5xl lg:text-6xl leading-tight">
                  ПечатниковЪ
                </p>
                <p className="text-xl font-light text-white/75 md:text-2xl">
                  Печать, которая говорит за вас
                </p>
                <p className="text-base text-white/55 max-w-md leading-relaxed">
                  Визитки, буклеты, баннеры и многое другое — с точностью до миллиметра. Работаем быстро, печатаем качественно.
                </p>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm text-white/80 transition-all hover:bg-white hover:text-black"
                    aria-label="Написать в Telegram"
                  >
                    Заказать печать
                  </a>
                  <a
                    href="https://vk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80 self-center"
                    aria-label="ВКонтакте"
                  >
                    Наши работы →
                  </a>
                </div>
                <div className="flex gap-8 pt-2 border-t border-white/10 mt-6">
                  <div>
                    <p className="text-2xl font-light text-white">500+</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest mt-1">клиентов</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-white">12 лет</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest mt-1">на рынке</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-white">1 день</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest mt-1">срочный тираж</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}