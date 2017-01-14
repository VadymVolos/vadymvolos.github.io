Урок: Скрипт модального окна remodal.js (смотреть с 10:30)  
https://youtu.be/g0E2KxHko58?t=10m30s

Подключил ксс и скрипт в файле default.html  
https://github.com/VadymVolos/vadymvolos.github.io/blob/master/_layouts/default.html

```
Чтоб в ссылке сайте не было #modal-1  
https://vadymvolos.github.io/#modal-1  
https://vadymvolos.github.io/  и была ссылка без хвоста,  
нужно дописть в код  data-remodal-options="hashTracking: false"  
Пример:  
<div class="remodal" data-remodal-id="modal" data-remodal-options="hashTracking: false">  
```
