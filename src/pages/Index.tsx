import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Умное орошение AgriFlow',
    category: 'Системы полива',
    price: '125 000 ₽',
    description: 'Автоматизированная система капельного орошения с датчиками влажности почвы',
    features: ['IoT мониторинг', 'Экономия воды до 40%', 'Удалённое управление']
  },
  {
    id: 2,
    name: 'Датчики почвы SoilSense Pro',
    category: 'Аналитика',
    price: '45 000 ₽',
    description: 'Комплект датчиков для анализа NPK, pH и влажности почвы',
    features: ['Точность 98%', 'Wireless передача', 'Батарея 2 года']
  },
  {
    id: 3,
    name: 'Биоудобрения EcoGrow',
    category: 'Агрохимия',
    price: '8 500 ₽',
    description: 'Органические биоудобрения нового поколения на основе микробиома',
    features: ['100% органика', 'Увеличение урожая +25%', 'Сертификат ЕС']
  },
  {
    id: 4,
    name: 'Метеостанция WeatherTrack',
    category: 'Метеорология',
    price: '78 000 ₽',
    description: 'Профессиональная метеостанция с прогнозированием и оповещениями',
    features: ['Прогноз на 7 дней', 'SMS-оповещения', 'Архив данных']
  },
  {
    id: 5,
    name: 'Дроны для опрыскивания AgroAir',
    category: 'Техника',
    price: '890 000 ₽',
    description: 'БПЛА для точного опрыскивания и мониторинга посевов',
    features: ['До 15 га/час', 'GPS навигация', 'HD камера']
  },
  {
    id: 6,
    name: 'Система учёта FarmERP',
    category: 'Софт',
    price: '25 000 ₽/год',
    description: 'Облачная ERP-система для управления сельхозпредприятием',
    features: ['Учёт техники', 'Склад и логистика', 'Отчётность']
  }
];

const articles = [
  {
    id: 1,
    title: 'Точное земледелие: революция в агросекторе',
    category: 'Технологии',
    date: '15 октября 2025',
    excerpt: 'Как современные технологии IoT, AI и дронов трансформируют традиционное сельское хозяйство и повышают урожайность.',
    readTime: '8 мин'
  },
  {
    id: 2,
    title: 'Севооборот 2.0: научный подход к планированию',
    category: 'Агрономия',
    date: '12 октября 2025',
    excerpt: 'Детальное руководство по организации севооборота с учётом анализа почвы и климатических данных.',
    readTime: '12 мин'
  },
  {
    id: 3,
    title: 'Экономия воды: 5 проверенных методов',
    category: 'Ресурсы',
    date: '8 октября 2025',
    excerpt: 'Практические решения для снижения расхода воды без потери эффективности орошения на 30-40%.',
    readTime: '6 мин'
  },
  {
    id: 4,
    title: 'Органическое земледелие: мифы и реальность',
    category: 'Экология',
    date: '3 октября 2025',
    excerpt: 'Разбираем популярные заблуждения об органическом земледелии и рассказываем о реальных преимуществах.',
    readTime: '10 мин'
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
              <p className="text-xs text-muted-foreground">Инновации в агросекторе</p>
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
              Инновационные решения для современного сельского хозяйства
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Помогаем аграриям повышать урожайность и эффективность с помощью передовых технологий IoT, ИИ и точного земледелия
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
            <h3 className="text-3xl font-bold mb-4">Каталог продукции</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессиональное оборудование и решения для эффективного ведения сельского хозяйства
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
              Экспертные статьи о современных технологиях и практиках в сельском хозяйстве
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
                  Работаем с аграриями по всей России
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h4 className="text-xl font-bold">2000+ клиентов</h4>
                <p className="text-sm text-muted-foreground">
                  Доверяют нашим решениям
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold">+35% урожайность</h4>
                <p className="text-sm text-muted-foreground">
                  Средний прирост у наших клиентов
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
                Инновационные решения для эффективного сельского хозяйства
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Продукция</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Системы полива</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Датчики и аналитика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Агрохимия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Техника</a></li>
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
