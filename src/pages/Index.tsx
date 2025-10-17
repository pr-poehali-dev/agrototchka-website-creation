import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sprout" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Агроточка</h1>
              <p className="text-xs text-muted-foreground">Автопилоты для сельхозтехники</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#articles" className="text-sm font-medium hover:text-primary transition-colors">Статьи</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <Button variant="default" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Технологии будущего
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Автопилоты для тракторов, комбайнов и сельхозтехники
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Системы автоматического вождения с точностью до 2 см. Экономьте топливо, работайте ночью, снижайте усталость механизаторов
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="ShoppingCart" size={20} />
                Каталог продукции
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="BookOpen" size={20} />
                Читать статьи
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Каталог автопилотов</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Системы автоматического вождения, курсоуказатели и оборудование для точного земледелия
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
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-16 bg-accent/20">
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

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold">12+ лет опыта</h4>
                <p className="text-sm text-muted-foreground">
                  Установили 3500+ систем автопилотов
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h4 className="text-xl font-bold">2000+ хозяйств</h4>
                <p className="text-sm text-muted-foreground">
                  Используют наши автопилоты
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold">Экономия 15%</h4>
                <p className="text-sm text-muted-foreground">
                  Топлива и ресурсов с автопилотом
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" size={24} className="text-primary" />
                <span className="font-bold text-lg">Агроточка</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Автопилоты и системы точного земледелия для вашей техники
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Продукция</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Автопилоты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Курсоуказатели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">RTK станции</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Компоненты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 555-35-35</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@agrotochka.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Фермерская, 12</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Агроточка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}