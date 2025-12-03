import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedCourt, setSelectedCourt] = useState<string>('');
  const [bookingStep, setBookingStep] = useState<'date' | 'time' | 'court' | 'level' | 'confirm'>('date');

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const timeSlots = ['09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30', '21:00'];
  const playerLevels = ['Начинающий', 'Любитель', 'Продвинутый', 'Профессионал'];

  const courts = [
    { id: '1', name: 'Корт №1', surface: 'Искусственная трава', available: true },
    { id: '2', name: 'Корт №2', surface: 'Искусственная трава', available: true },
    { id: '3', name: 'Корт №3', surface: 'Синтетическое покрытие', available: false }
  ];

  const services = [
    { icon: 'Trophy', title: 'Тренировки', desc: 'Индивидуальные и групповые занятия' },
    { icon: 'Users', title: 'Турниры', desc: 'Соревнования для всех уровней' },
    { icon: 'ShoppingBag', title: 'Магазин', desc: 'Оборудование и экипировка' },
    { icon: 'Coffee', title: 'Кафе', desc: 'Зона отдыха с напитками' }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/2f599751-da9a-4af4-ad50-14dd558ef9ab/files/f0fd203c-3a4a-4996-9b39-905d4af18892.jpg',
    'https://cdn.poehali.dev/projects/2f599751-da9a-4af4-ad50-14dd558ef9ab/files/6123b618-48a7-4531-8d29-4e1c326fd883.jpg',
    'https://cdn.poehali.dev/projects/2f599751-da9a-4af4-ad50-14dd558ef9ab/files/9064acc4-cbd0-41ff-b0dd-88be89b09947.jpg'
  ];

  const handleNextStep = () => {
    if (bookingStep === 'date' && date) setBookingStep('time');
    else if (bookingStep === 'time' && selectedTime) setBookingStep('court');
    else if (bookingStep === 'court' && selectedCourt) setBookingStep('level');
    else if (bookingStep === 'level' && selectedLevel) setBookingStep('confirm');
  };

  const resetBooking = () => {
    setBookingStep('date');
    setSelectedTime('');
    setSelectedCourt('');
    setSelectedLevel('');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <span className="text-xl font-bold font-montserrat">PADEL</span>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  <button onClick={() => scrollToSection('hero')} className="text-lg font-semibold hover:text-primary transition-colors text-left">Главная</button>
                  <button onClick={() => scrollToSection('booking')} className="text-lg font-semibold hover:text-primary transition-colors text-left">Бронирование</button>
                  <button onClick={() => scrollToSection('about')} className="text-lg font-semibold hover:text-primary transition-colors text-left">О клубе</button>
                  <button onClick={() => scrollToSection('courts')} className="text-lg font-semibold hover:text-primary transition-colors text-left">Корты</button>
                  <button onClick={() => scrollToSection('gallery')} className="text-lg font-semibold hover:text-primary transition-colors text-left">Галерея</button>
                  <button onClick={() => scrollToSection('services')} className="text-lg font-semibold hover:text-primary transition-colors text-left">Услуги</button>
                  <button onClick={() => scrollToSection('contacts')} className="text-lg font-semibold hover:text-primary transition-colors text-left">Контакты</button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={galleryImages[0]} 
              alt="Padel court"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-4">
              PADEL CLUB
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-90">Завод имени Ильича</p>
            <p className="text-base md:text-lg mb-8 opacity-75">Москва</p>
            
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection('booking')}
            >
              <Icon name="Calendar" className="mr-2" />
              Забронировать корт
            </Button>
          </div>
        </section>

        <section id="booking" className="py-8 px-4 bg-background">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold font-montserrat mb-6 text-center">Бронирование</h2>
            
            <div className="flex justify-between mb-6">
              {['date', 'time', 'court', 'level', 'confirm'].map((step, index) => (
                <div key={step} className="flex flex-col items-center flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    bookingStep === step ? 'bg-primary text-white' : 
                    ['date', 'time', 'court', 'level', 'confirm'].indexOf(bookingStep) > index ? 'bg-primary/20 text-primary' : 
                    'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>

            <Card>
              <CardContent className="pt-6">
                {bookingStep === 'date' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Выберите дату</h3>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border mx-auto"
                    />
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleNextStep}
                      disabled={!date}
                    >
                      Далее
                    </Button>
                  </div>
                )}

                {bookingStep === 'time' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Выберите время</h3>
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
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => setBookingStep('date')}>
                        Назад
                      </Button>
                      <Button 
                        className="flex-1" 
                        onClick={handleNextStep}
                        disabled={!selectedTime}
                      >
                        Далее
                      </Button>
                    </div>
                  </div>
                )}

                {bookingStep === 'court' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Выберите корт</h3>
                    <div className="space-y-2">
                      {courts.map((court) => (
                        <Button
                          key={court.id}
                          variant={selectedCourt === court.id ? 'default' : 'outline'}
                          onClick={() => court.available && setSelectedCourt(court.id)}
                          disabled={!court.available}
                          className="w-full h-auto py-4 justify-start"
                        >
                          <div className="text-left">
                            <div className="font-semibold">{court.name}</div>
                            <div className="text-sm opacity-75">{court.surface}</div>
                            {!court.available && <Badge variant="secondary" className="mt-1">Занято</Badge>}
                          </div>
                        </Button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => setBookingStep('time')}>
                        Назад
                      </Button>
                      <Button 
                        className="flex-1" 
                        onClick={handleNextStep}
                        disabled={!selectedCourt}
                      >
                        Далее
                      </Button>
                    </div>
                  </div>
                )}

                {bookingStep === 'level' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Ваш уровень игры</h3>
                    <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                      <SelectTrigger className="h-12">
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
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => setBookingStep('court')}>
                        Назад
                      </Button>
                      <Button 
                        className="flex-1" 
                        onClick={handleNextStep}
                        disabled={!selectedLevel}
                      >
                        Далее
                      </Button>
                    </div>
                  </div>
                )}

                {bookingStep === 'confirm' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Подтверждение</h3>
                    <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Дата:</span>
                        <span className="font-semibold">{date?.toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Время:</span>
                        <span className="font-semibold">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Корт:</span>
                        <span className="font-semibold">Корт №{selectedCourt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Уровень:</span>
                        <span className="font-semibold">{selectedLevel}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => setBookingStep('level')}>
                        Назад
                      </Button>
                      <Button className="flex-1" onClick={resetBooking}>
                        <Icon name="Check" className="mr-2" />
                        Подтвердить
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="about" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={galleryImages[1]} 
              alt="About"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">О клубе</h2>
              <p className="text-lg mb-4 opacity-90">
                Padel Club на заводе имени Ильича — уникальное пространство, где индустриальная эстетика 
                сочетается с современным спортом.
              </p>
              <p className="text-base opacity-80">
                Три профессиональных корта с качественным покрытием и отличным освещением.
              </p>
            </div>
          </div>
        </section>

        <section id="courts" className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold font-montserrat mb-6 text-center">Корты</h2>
            <div className="space-y-4">
              {courts.map((court) => (
                <Card key={court.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <span>{court.name}</span>
                      {court.available ? (
                        <Badge variant="secondary" className="bg-green-500/10 text-green-500">Доступен</Badge>
                      ) : (
                        <Badge variant="secondary">Занято</Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{court.surface}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        <Icon name="CheckCircle" size={12} className="mr-1" />
                        Освещение
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Icon name="CheckCircle" size={12} className="mr-1" />
                        Климат-контроль
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold font-montserrat mb-6 text-center">Галерея</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section id="services" className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold font-montserrat mb-6 text-center">Услуги</h2>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-2">
                    <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-base">{service.title}</CardTitle>
                    <CardDescription className="text-xs">{service.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={galleryImages[2]} 
              alt="Contact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold font-montserrat mb-6 text-center text-white">Контакты</h2>
              <Card className="bg-white/95 backdrop-blur">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Адрес</div>
                      <div className="text-sm text-muted-foreground">Завод имени Ильича, Москва</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Email</div>
                      <div className="text-sm text-muted-foreground">info@padelclub.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Instagram" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Instagram</div>
                      <div className="text-sm text-muted-foreground">@padelclub_ilyich</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary" />
            <span className="text-lg font-bold font-montserrat">PADEL CLUB</span>
          </div>
          <p className="text-xs opacity-70">© 2024 Padel Club. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
