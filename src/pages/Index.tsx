import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Автопилот AgriDrive Pro',
    category: 'Автопилоты',
    price: '450 000 ₽',
    description: 'Система автоматического вождения для тракторов любых марок с точностью 2,5 см',
    features: ['RTK GPS точность', 'Автоповороты', 'Круглосуточная работа']
  },
  {
    id: 2,
    name: 'Автопилот CombiNav Elite',
    category: 'Автопилоты',
    price: '580 000 ₽',
    description: 'Премиум система для комбайнов с интеллектуальным управлением жаткой',
    features: ['Точность 1,8 см', 'Контроль жатки', 'Картирование урожайности']
  },
  {
    id: 3,
    name: 'Автопилот OptiSteer Basic',
    category: 'Автопилоты',
    price: '280 000 ₽',
    description: 'Базовая система автовождения для малых и средних хозяйств',
    features: ['Точность 5 см', 'Простая установка', 'Любая техника']
  },
  {
    id: 4,
    name: 'Система курсоуказания PathGuide',
    category: 'Курсоуказатели',
    price: '95 000 ₽',
    description: 'Световой курсоуказатель для ручного вождения с GPS',
    features: ['Экран 10"', 'Параллельное вождение', 'База для upgrade']
  },
  {
    id: 5,
    name: 'Электроруль AutoSteer Plus',
    category: 'Компоненты',
    price: '180 000 ₽',
    description: 'Универсальный электрический рулевой привод для автопилотов',
    features: ['Установка за 2 часа', 'Для любых тракторов', 'Защита IP67']
  },
  {
    id: 6,
    name: 'RTK база FieldStation',
    category: 'Оборудование',
    price: '320 000 ₽',
    description: 'Базовая RTK станция для максимальной точности в радиусе 20 км',
    features: ['Точность <2 см', 'Радиус 20 км', 'Своя сеть RTK']
  }
];

const articles = [
  {
    id: 1,
    title: 'Автопилот vs ручное вождение: реальная экономика',
    category: 'Экономика',
    date: '15 октября 2025',
    excerpt: 'Подробный расчёт окупаемости автопилота: экономия топлива 15%, снижение перекрытий до 98%, рост производительности на 25%.',
    readTime: '10 мин'
  },
  {
    id: 2,
    title: 'Как выбрать автопилот: гид по системам навигации',
    category: 'Гайды',
    date: '12 октября 2025',
    excerpt: 'RTK, EGNOS или SF3? Разбираем типы коррекции GPS, точность, стоимость и подбираем оптимальную систему под ваши задачи.',
    readTime: '12 мин'
  },
  {
    id: 3,
    title: 'Установка автопилота: пошаговая инструкция',
    category: 'Инструкции',
    date: '8 октября 2025',
    excerpt: 'От распаковки до первого прохода: как правильно установить и настроить систему автовождения на трактор своими силами.',
    readTime: '15 мин'
  },
  {
    id: 4,
    title: 'Ночная работа с автопилотом: особенности и преимущества',
    category: 'Опыт',
    date: '3 октября 2025',
    excerpt: 'Как автопилот позволяет работать в тёмное время суток без потери точности и увеличить производительность техники в 1,5 раза.',
    readTime: '8 мин'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hectares, setHectares] = useState(500);
  const [fuelPrice, setFuelPrice] = useState(60);
  const [hoursPerYear, setHoursPerYear] = useState(800);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formArea, setFormArea] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const calculations = useMemo(() => {
    const fuelSavingsPerHectare = 1.5;
    const totalFuelSavings = hectares * fuelSavingsPerHectare;
    const fuelSavingsMoney = totalFuelSavings * fuelPrice;
    
    const timeSavingsPercent = 20;
    const timeSavingsHours = (hoursPerYear * timeSavingsPercent) / 100;
    const timeSavingsMoney = timeSavingsHours * 800;
    
    const overlapReduction = hectares * 0.05 * 2000;
    
    const totalSavings = fuelSavingsMoney + timeSavingsMoney + overlapReduction;
    const autopilotCost = 450000;
    const paybackMonths = Math.round((autopilotCost / totalSavings) * 12);
    
    return {
      fuelSavingsLiters: Math.round(totalFuelSavings),
      fuelSavingsMoney: Math.round(fuelSavingsMoney),
      timeSavingsHours: Math.round(timeSavingsHours),
      timeSavingsMoney: Math.round(timeSavingsMoney),
      overlapReduction: Math.round(overlapReduction),
      totalSavings: Math.round(totalSavings),
      paybackMonths
    };
  }, [hectares, fuelPrice, hoursPerYear]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wheat" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground tracking-tight">Агроточка</h1>
              <p className="text-xs text-muted-foreground">Автопилоты для техники</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Каталог</a>
            <a href="#calculator" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Калькулятор</a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Контакты</a>
            <Button variant="default" size="sm" className="rounded-sm">
              Консультация
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-3">
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Системы точного земледелия</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Автопилоты для сельхозтехники
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Точность до 2 см. Экономия топлива 15%. Работа в любое время суток.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Button size="lg" className="rounded-sm">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="rounded-sm">
                Рассчитать окупаемость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Продукция</span>
            <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Каталог оборудования</h3>
            <p className="text-muted-foreground max-w-2xl">
              Системы автовождения, курсоуказатели и компоненты для точного земледелия
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 lg:grid-cols-7">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="text-xs lg:text-sm"
                >
                  {cat === 'all' ? 'Всё' : cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="hover:shadow-md transition-all duration-200 border-2 rounded-sm"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{product.category}</span>
                    <span className="text-xl font-bold">{product.price}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{product.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-sm h-11">
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Калькулятор</span>
              <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Окупаемость автопилота</h3>
              <p className="text-muted-foreground max-w-2xl">
                Рассчитайте экономию на топливе, времени и ресурсах
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="hectares" className="text-sm font-medium">
                        Площадь обработки, га/год
                      </Label>
                      <Input
                        id="hectares"
                        type="number"
                        value={hectares}
                        onChange={(e) => setHectares(Number(e.target.value))}
                        className="text-lg rounded-sm h-12"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="fuel" className="text-sm font-medium">
                        Цена топлива, ₽/л
                      </Label>
                      <Input
                        id="fuel"
                        type="number"
                        value={fuelPrice}
                        onChange={(e) => setFuelPrice(Number(e.target.value))}
                        className="text-lg rounded-sm h-12"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="hours" className="text-sm font-medium">
                        Часов работы в год
                      </Label>
                      <Input
                        id="hours"
                        type="number"
                        value={hoursPerYear}
                        onChange={(e) => setHoursPerYear(Number(e.target.value))}
                        className="text-lg rounded-sm h-12"
                      />
                    </div>
                  </div>

                  <div className="bg-muted/40 rounded-sm p-8 space-y-4">
                    <h4 className="text-lg font-bold mb-6 uppercase tracking-wide text-muted-foreground">Годовая экономия</h4>

                    <div className="space-y-4">
                      <div className="flex items-start justify-between pb-3 border-b">
                        <span className="text-sm">Топливо</span>
                        <div className="text-right">
                          <p className="font-bold text-xl">{calculations.fuelSavingsMoney.toLocaleString()} ₽</p>
                          <p className="text-xs text-muted-foreground">{calculations.fuelSavingsLiters} литров</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between pb-3 border-b">
                        <span className="text-sm">Время</span>
                        <div className="text-right">
                          <p className="font-bold text-xl">{calculations.timeSavingsMoney.toLocaleString()} ₽</p>
                          <p className="text-xs text-muted-foreground">{calculations.timeSavingsHours} часов</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-between pb-3 border-b">
                        <span className="text-sm">Перекрытия</span>
                        <div className="text-right">
                          <p className="font-bold text-xl">{calculations.overlapReduction.toLocaleString()} ₽</p>
                          <p className="text-xs text-muted-foreground">минус 5% площади</p>
                        </div>
                      </div>

                      <div className="bg-primary/10 rounded-sm p-5 mt-6 border-2 border-primary/20">
                        <div className="flex items-baseline justify-between mb-2">
                          <span className="font-semibold uppercase text-sm tracking-wide">Итого</span>
                          <span className="text-3xl font-bold text-primary">{calculations.totalSavings.toLocaleString()} ₽</span>
                        </div>
                        <div className="flex items-center justify-between text-sm pt-2 border-t border-primary/20">
                          <span>Окупаемость</span>
                          <span className="font-bold">{calculations.paybackMonths} месяцев</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Консультация</span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Получите расчёт под ваше хозяйство</h3>
                <p className="text-muted-foreground mb-8">
                  Оставьте заявку, и наш специалист рассчитает точную окупаемость автопилота для вашей техники и условий работы
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" size={20} className="text-primary" />
                    </div>
                    <span>Бесплатный выезд специалиста</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" size={20} className="text-primary" />
                    </div>
                    <span>Подбор оптимальной системы</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" size={20} className="text-primary" />
                    </div>
                    <span>Установка и обучение</span>
                  </div>
                </div>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Заявка на консультацию</CardTitle>
                  <CardDescription>Ответим в течение 2 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="py-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="CheckCircle2" size={32} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Заявка отправлена</h4>
                      <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      setIsSubmitted(true);
                    }} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input
                          id="name"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          required
                          className="rounded-sm h-11"
                          placeholder="Иван Петров"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          required
                          className="rounded-sm h-11"
                          placeholder="+7 (900) 123-45-67"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="area">Площадь хозяйства, га</Label>
                        <Input
                          id="area"
                          value={formArea}
                          onChange={(e) => setFormArea(e.target.value)}
                          className="rounded-sm h-11"
                          placeholder="500"
                        />
                      </div>
                      <Button type="submit" className="w-full rounded-sm h-11" size="lg">
                        Отправить заявку
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/20 hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Полезные материалы</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Статьи об автопилотах, точном земледелии и автоматизации работы сельхозтехники
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <Card 
                key={article.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>{article.category}</Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-2 p-0 h-auto">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Все статьи
              <Icon name="Library" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Преимущества</span>
              <h3 className="text-3xl md:text-4xl font-bold mt-2">Почему выбирают нас</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Icon name="Award" size={28} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold">12 лет опыта</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Установили более 3500 систем автопилотов для хозяйств по всей России
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Icon name="Wrench" size={28} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold">Полное сопровождение</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Установка, настройка, обучение персонала и техподдержка на всех этапах
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Icon name="TrendingUp" size={28} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold">Гарантия результата</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Окупаемость от 10 месяцев. Экономия топлива до 15%, рост производительности до 25%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wheat" size={20} className="text-primary" />
                <span className="font-bold">Агроточка</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Системы точного земледелия для современного сельского хозяйства
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-sm uppercase tracking-wide">Продукция</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#catalog" className="hover:text-foreground transition-colors">Автопилоты</a></li>
                <li><a href="#catalog" className="hover:text-foreground transition-colors">Курсоуказатели</a></li>
                <li><a href="#catalog" className="hover:text-foreground transition-colors">RTK станции</a></li>
                <li><a href="#catalog" className="hover:text-foreground transition-colors">Компоненты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-sm uppercase tracking-wide">Компания</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#calculator" className="hover:text-foreground transition-colors">Калькулятор</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-sm uppercase tracking-wide">Контакты</h5>
              <ul className="space-y-3 text-sm">
                <li className="text-muted-foreground">
                  +7 (800) 555-35-35
                </li>
                <li className="text-muted-foreground">
                  info@agrotochka.ru
                </li>
                <li className="text-muted-foreground">
                  Москва, ул. Фермерская, 12
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-xs text-muted-foreground">
            <p>© 2025 Агроточка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}