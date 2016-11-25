Этот README.md файл нужен только для гитхаба.

По поводу почему не работает страница blog.md которая в корне.
Если удалить папку blog то она будет работать.

Папку blog добавил я, взял в другом проекте. Добавил чтоб сделать вывод категорий и теегов.
В папке блог есть файл /blog/index.html При заходе на сайт http://vadymvolos.github.io/blog/
как раз отображается этот индексный файл, а если удалить папку blog со всеми файлами которые внутри, то тогда по адресу
http://vadymvolos.github.io/blog/ будет отображатся файл blog.md который в корне.

Инструкция как добавить Категории к блогу на ГитХаб:
https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/

Следующее. Взял тут (https://github.com/codinfox/lanyon-codinfox.github.io/tree/master/_layouts)
файл blog_index.html и залил его в папку vadymvolos.github.io\_layouts\blog_index.html

для того чтобы при просмотре страницы http://vadymvolos.github.io/blog/ подключились стили (ибо стилей не было).
