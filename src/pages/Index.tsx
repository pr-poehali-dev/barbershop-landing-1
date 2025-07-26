import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    { name: 'Мужская стрижка', price: '2500₽', description: 'Классическая и современная стрижка' },
    { name: 'Бритьё', price: '1800₽', description: 'Опасной бритвой с горячим полотенцем' },
    { name: 'Камуфляж седины', price: '1500₽', description: 'Закрашивание седых волос' },
    { name: 'Оформление бороды', price: '1200₽', description: 'Моделирование и стрижка бороды' },
  ];

  const reviews = [
    { name: 'Алексей', text: 'Лучший барбершоп в городе! Мастера настоящие профессионалы.', rating: 5 },
    { name: 'Михаил', text: 'Атмосфера огонь, стрижка идеальная. Рекомендую всем!', rating: 5 },
    { name: 'Дмитрий', text: 'Хожу сюда уже полгода. Качество всегда на высоте.', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-barbershop-black text-barbershop-white font-roboto">
      {/* Header */}
      <header className="fixed top-0 w-full bg-barbershop-black/90 backdrop-blur-sm z-50 border-b border-barbershop-graphite/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/img/25841821-a70e-4c45-a35b-b75f61441ac7.jpg" alt="Barbershop Logo" className="w-8 h-8" />
            <span className="font-oswald text-xl font-bold text-barbershop-gold">RAZOR KING</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-barbershop-gold transition-colors">Услуги</a>
            <a href="#prices" className="hover:text-barbershop-gold transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-barbershop-gold transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-barbershop-gold transition-colors">Контакты</a>
          </nav>
          <Button className="bg-barbershop-gold text-barbershop-black hover:bg-barbershop-gold/90 font-oswald font-medium">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/6c42229c-52ca-48d2-8c82-647382c6fe18.jpg')`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-oswald text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            ТВОЯ СТРИЖКА —
            <br />
            <span className="text-barbershop-gold">ТВОЯ СИЛА</span>
          </h1>
          <p className="text-xl md:text-2xl text-barbershop-graphite mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Премиальный мужской салон в урбанском стиле
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-barbershop-gold text-barbershop-black hover:bg-barbershop-gold/90 font-oswald font-medium text-lg px-8 py-4">
              <Icon name="Calendar" className="mr-2" />
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="border-barbershop-gold text-barbershop-gold hover:bg-barbershop-gold hover:text-barbershop-black font-oswald font-medium text-lg px-8 py-4">
              <Icon name="Phone" className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-barbershop-gold" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-barbershop-darkGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              НАШИ <span className="text-barbershop-gold">УСЛУГИ</span>
            </h2>
            <div className="w-24 h-1 bg-barbershop-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-barbershop-black border-barbershop-graphite/30 hover:border-barbershop-gold/50 transition-all duration-300 group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    {index === 0 && <Icon name="Scissors" size={48} className="text-barbershop-gold mx-auto" />}
                    {index === 1 && <Icon name="Zap" size={48} className="text-barbershop-gold mx-auto" />}
                    {index === 2 && <Icon name="Palette" size={48} className="text-barbershop-gold mx-auto" />}
                    {index === 3 && <Icon name="Beard" size={48} className="text-barbershop-gold mx-auto" fallback="User" />}
                  </div>
                  <h3 className="font-oswald text-xl font-bold mb-2 text-barbershop-white group-hover:text-barbershop-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-barbershop-graphite text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-oswald font-bold text-barbershop-gold">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-20 bg-barbershop-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/img/e47ac831-fb13-4a27-8ade-5a196224ba0f.jpg" 
                alt="Professional haircut" 
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">
                МАСТЕРСТВО В
                <br />
                <span className="text-barbershop-gold">КАЖДОЙ ДЕТАЛИ</span>
              </h2>
              <p className="text-lg text-barbershop-graphite mb-8 leading-relaxed">
                Наши мастера — настоящие профессионалы своего дела. Мы используем только премиальные 
                инструменты и косметику, чтобы создать идеальный образ для каждого клиента.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-barbershop-gold mb-2">5+</div>
                  <div className="text-sm text-barbershop-graphite">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-barbershop-gold mb-2">1000+</div>
                  <div className="text-sm text-barbershop-graphite">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-barbershop-gold mb-2">100%</div>
                  <div className="text-sm text-barbershop-graphite">Качество</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-barbershop-gold mb-2">24/7</div>
                  <div className="text-sm text-barbershop-graphite">Онлайн запись</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-barbershop-darkGray">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              ОНЛАЙН <span className="text-barbershop-gold">ЗАПИСЬ</span>
            </h2>
            <p className="text-barbershop-graphite mb-8">Забронируйте время прямо сейчас</p>
            
            <Card className="bg-barbershop-black border-barbershop-graphite/30">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-barbershop-darkGray border-barbershop-graphite text-barbershop-white placeholder-barbershop-graphite"
                    />
                    <Input 
                      placeholder="Телефон" 
                      className="bg-barbershop-darkGray border-barbershop-graphite text-barbershop-white placeholder-barbershop-graphite"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      type="date" 
                      className="bg-barbershop-darkGray border-barbershop-graphite text-barbershop-white"
                    />
                    <Input 
                      type="time" 
                      className="bg-barbershop-darkGray border-barbershop-graphite text-barbershop-white"
                    />
                  </div>
                  <Textarea 
                    placeholder="Комментарий к записи" 
                    className="bg-barbershop-darkGray border-barbershop-graphite text-barbershop-white placeholder-barbershop-graphite"
                  />
                  <Button size="lg" className="w-full bg-barbershop-gold text-barbershop-black hover:bg-barbershop-gold/90 font-oswald font-medium text-lg">
                    <Icon name="Calendar" className="mr-2" />
                    Записаться
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-barbershop-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              ОТЗЫВЫ <span className="text-barbershop-gold">КЛИЕНТОВ</span>
            </h2>
            <div className="w-24 h-1 bg-barbershop-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-barbershop-darkGray border-barbershop-graphite/30">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-barbershop-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-barbershop-graphite mb-4 italic">"{review.text}"</p>
                  <div className="font-oswald font-bold text-barbershop-gold">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-barbershop-darkGray">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-8">
                КОНТАКТЫ И <span className="text-barbershop-gold">АДРЕС</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-barbershop-gold" />
                  <div>
                    <div className="font-oswald font-bold">Адрес</div>
                    <div className="text-barbershop-graphite">ул. Центральная, 15, Москва</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-barbershop-gold" />
                  <div>
                    <div className="font-oswald font-bold">Часы работы</div>
                    <div className="text-barbershop-graphite">Пн-Вс: 9:00 - 21:00</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-barbershop-gold" />
                  <div>
                    <div className="font-oswald font-bold">Телефон</div>
                    <div className="text-barbershop-graphite">+7 (495) 123-45-67</div>
                  </div>
                </div>
                
                <Button className="bg-green-600 hover:bg-green-700 text-white font-oswald font-medium">
                  <Icon name="MessageCircle" className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="bg-barbershop-graphite h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-barbershop-gold mx-auto mb-4" />
                <div className="font-oswald text-xl font-bold">Интерактивная карта</div>
                <div className="text-sm text-barbershop-graphite mt-2">ул. Центральная, 15</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-barbershop-black border-t border-barbershop-graphite/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/img/25841821-a70e-4c45-a35b-b75f61441ac7.jpg" alt="Barbershop Logo" className="w-6 h-6" />
            <span className="font-oswald text-lg font-bold text-barbershop-gold">RAZOR KING</span>
          </div>
          <p className="text-barbershop-graphite text-sm">
            © 2024 Razor King Barbershop. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;