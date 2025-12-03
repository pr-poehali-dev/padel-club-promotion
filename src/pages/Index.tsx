import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const timeSlots = ['09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30', '21:00'];
  const playerLevels = ['Начинающий', 'Любитель', 'Продвинутый', 'Профессионал'];

  const courts = [
    { id: 1, name: 'Корт №1', type: 'Indoor', surface: 'Искусственная трава' },
    { id: 2, name: 'Корт №2', type: 'Indoor', surface: 'Искусственная трава' },
    { id: 3, name: 'Корт №3', type: 'Indoor', surface: 'Синтетическое покрытие' }
  ];

  const services = [
    { icon: 'Trophy', title: 'Тренировки', desc: 'Индивидуальные и групповые занятия с профессиональными тренерами' },
    { icon: 'Users', title: 'Турниры', desc: 'Регулярные соревнования для игроков всех уровней' },
    { icon: 'ShoppingBag', title: 'Магазин', desc: 'Профессиональное оборудование и экипировка' },
    { icon: 'Coffee', title: 'Кафе', desc: 'Уютная зона отдыха с напитками и закусками' }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/2f599751-da9a-4af4-ad50-14dd558ef9ab/files/f0fd203c-3a4a-4996-9b39-905d4af18892.jpg',
    'https://cdn.poehali.dev/projects/2f599751-da9a-4af4-ad50-14dd558ef9ab/files/6123b618-48a7-4531-8d29-4e1c326fd883.jpg',
    'https://cdn.poehali.dev/projects/2f599751-da9a-4af4-ad50-14dd558ef9ab/files/9064acc4-cbd0-41ff-b0dd-88be89b09947.jpg'
  ];

  const schedule = [
    { day: 'Понедельник - Пятница', time: '09:00 - 23:00' },
    { day: 'Суббота - Воскресенье', time: '10:00 - 23:00' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Circle" size={32} className="text-primary" />
              <span className="text-2xl font-bold font-montserrat">PADEL CLUB</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-semibold hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-semibold hover:text-primary transition-colors">О клубе</button>
              <button onClick={() => scrollToSection('courts')} className="text-sm font-semibold hover:text-primary transition-colors">Корты</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-semibold hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('schedule')} className="text-sm font-semibold hover:text-primary transition-colors">Расписание</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-semibold hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-semibold hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/2f599751-da9a-4af4-ad50-14dd558ef9ab/files/f0fd203c-3a4a-4996-9b39-905d4af18892.jpg')] bg-cover bg-center opacity-10" />
          
          <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold font-montserrat mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PADEL CLUB
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">Завод имени Ильича, Москва</p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Современный клуб с профессиональными кортами в индустриальном пространстве
            </p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6 animate-scale-in">
                  <Icon name="Calendar" className="mr-2" />
                  Забронировать корт
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Бронирование корта</DialogTitle>
                  <DialogDescription>Выберите дату, время и уровень игры</DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 py-4">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Выберите дату</label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border mx-auto"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Выберите время</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? 'default' : 'outline'}
                          onClick={() => setSelectedTime(time)}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Уровень игры</label>
                    <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите уровень" />
                      </SelectTrigger>
                      <SelectContent>
                        {playerLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full" size="lg" disabled={!date || !selectedTime || !selectedLevel}>
                    <Icon name="Check" className="mr-2" />
                    Подтвердить бронирование
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <div className="mt-12 flex justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Корта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">15</div>
                <div className="text-sm text-muted-foreground">Часов работы</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Игроков</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">О клубе</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Padel Club на заводе имени Ильича — это уникальное пространство, где индустриальная эстетика 
                сочетается с современным спортом. Мы создали три профессиональных корта с качественным 
                покрытием и отличным освещением.
              </p>
              <p className="text-lg text-muted-foreground">
                Наша миссия — развитие падела в Москве и создание комьюнити энтузиастов этого 
                динамичного и захватывающего вида спорта.
              </p>
            </div>
          </div>
        </section>

        <section id="courts" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12 text-center">Наши корты</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {courts.map((court) => (
                <Card key={court.id} className="hover:shadow-lg transition-shadow animate-scale-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Square" className="text-primary" />
                      {court.name}
                    </CardTitle>
                    <CardDescription>{court.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle" size={16} className="text-secondary" />
                        <span>{court.surface}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle" size={16} className="text-secondary" />
                        <span>Профессиональное освещение</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle" size={16} className="text-secondary" />
                        <span>Климат-контроль</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12 text-center">Галерея</h2>
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Padel club ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform">
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12 text-center">Расписание</h2>
            <div className="max-w-2xl mx-auto">
              {schedule.map((item, index) => (
                <Card key={index} className="mb-4 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Icon name="Clock" className="text-primary" />
                        {item.day}
                      </span>
                      <Badge variant="secondary" className="text-lg px-4 py-1">
                        {item.time}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12 text-center">Услуги</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12 text-center">Контакты</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="animate-fade-in">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-muted-foreground">Завод имени Ильича, Москва</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-muted-foreground">info@padelclub.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Instagram" className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Instagram</div>
                      <div className="text-muted-foreground">@padelclub_ilyich</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Circle" size={24} />
            <span className="text-xl font-bold font-montserrat">PADEL CLUB</span>
          </div>
          <p className="text-sm opacity-80">© 2024 Padel Club. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
