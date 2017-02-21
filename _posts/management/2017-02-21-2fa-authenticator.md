---
layout: post
title: Safety Management - двухфакторная аутентификация, Google Authenticator, Authy, и другие аналоги
description: Безопасность онлайн, все детали про Google Authenticator, Authy, и другие аналоги.
categories: [Уроки Менеджмент]
tags: [Безопасность онлайн, Safety Management Online, Маркетинг]
image: /images/posts/varianty-na-chem-sdelat-sayt.png
---
<img src="{{ site.baseurl }}/images/posts/varianty-na-chem-sdelat-sayt.png" alt="Двухфакторная аутентификация, Google Authenticator, Authy" title="Пост про детали ка кпользоваться Google Authenticator и Authy ">

Ниже в статье буду рассматривать все детали двухфакторной аутентификации с помощью приложения Google Authenticator и его аналогов. SMS и все остальные виды аутентификации на странице рассматриваться не будут.

Two-factor authentication (2FA), 2-Step verification - двухфакторная аутентификация, двухэтапная аутентификация, двоэтапная проверка.

Аутентификация - это процедура проверки подлинности.

Основные варианты:
- Подтверждение по емейл = 1FA
- Подтверждение по емейл + sms = 2FA
- Подтверждение по емейл + authenticator = 2FA
- Подтверждение по емейл + usb ключ = 2FA
- Другие варианты...


<h2>Зачем нужна двухфакторная аутентификация?</h2>

Взлом паролей довольно частое явление. Чтоб обезопасить пользователя от взлома уважающие себя сервисы добавляют вторую защиту. Злоумышленнику нужно будет не только взломать ваш комп (подсмотреть ваш пароль) но и добраться до вашего второго устройства.

<h3>Чаще пароли взламывают:</h3>
- если они сильно простые и предсказуемые;
- если вы используете один и тот же пароль на двух и более сайтах;
- если вы на комп и смартфон устанавливаете взломанные или непонятные программы и браузерные дополнения (там может быть невидимая для обычного пользователя программа, которая шпионит за вами, записывает ваш буфер обмена, ваши нажатия на клаве, и ваши действия на экране).- 

Просто пример окна входа:
<form name="f1" method="get" action=" ">
Ваш емейл: <br />
<input name="login" type="text" size="40" maxlength="30" value="" disabled/> <br />
Ваш пароль: <br />
<input name="pd" type="password" size="40" maxlength="30" value="" disabled/> <br />
Ваш код с приложения Google Authenticator: <br />
<input name="pd" type="text" size="40" maxlength="30" value="" disabled/> <br />
<input type="submit" name="enter" value="Вход" disabled/>
</form>


<h2>Почему приложение для смартфона лучше нежели приложение для ПК?</h2>

Приложений 2FA для ПК почти нет, а вот приложений для смартфонов очень много. 

Google Authenticator - официальное приложение от Гугл, его нет для ПК с целью безопасности, но для смарфтонов (Андроид, Эпл, Майкрософт) оно обязательно есть.

Лучше, потому что одноразовый 30 секундный код генерируетсятся на другом устройсве отдаленном от вашего ПК/ноубука, что значительно снижает риски. 

Но есть и недостаток, при потере смартфона (или при удалении программы Authenticator'а со смартфона, или при перепрошивке смартфона) нужно будет восстанавливать коды...

Еще один недостаток приложений на ПК - они дают возможность сделать экспорт генерального кода (посмотреть и скопировать его). То есть не разовых 30 секундных кодов, а того который вы вводили при добавлении аккаунта (сканировали штрих код). Тот кто владеет этим кодом может генерировать правильные коды без вашего ведома. Поэтому в Google Authenticator'е нет возможности экспорта, и во всех других аналогичных программах тоже нет возможности экспорта, с той целью чтоб ваша безопасность не пострадала. Смысл Google Authenticator'а полностью пропадает если кто-то сможет взять на время ваш телефон поиграться, и пока вы не видите посмотреть ваш код и отправить его себе на почту/в месенджер/соцети, или сфотографировать его, или сделать скриншот кода, и тп.

Если вы потеряли смартфон. Вам нужно зайти на тот сайт где вы включали защиту с помощью Google Authenticator'а, и почитать страницу с ответами на опросы FAQ, там обязательно должен быть пункт что делать если я включил Google Authenticator и потерял телефон. Вам нужно будет подтвердить сою личность теми способами которые там написаны и после этого они дадут вам возможность войти в ваш аккаунт и подключить новый смартфон (сгенерировать новый код для смартфона).

Как вариант на этапе добавления аккаунта (экран со штрих кодом), вы можете сохранить главный пароль в надежное место. И если будет телефон утерян, сможете ввести этот код на новом смартфоне. Но при сохранении кода, нужно учесть безопасность, если вы скопируете его в буфер, и если у вас установлена программа шпион (о которой вы не догадываетесь) то она может с буфера сохранить код себе. Лучше важные операции делать в защищенном режиме браузера (некоторые антивирусы предоставляют такую возможность для банковских операций). Этот пароль лучше не сохранять в то место где вы держите пароли, а сохранить отдельно. И также желательно зашифровать и запаролить. 



<!-- accordion -->
<ul class="accordion">
	<li class="accordion-li">
		<a class="accordion-a"><h2>Почему Google Authenticator лучше чем код в sms?</h2></a>
		<div class="accordion-content">
		Позже добавлю текст.
		</div>
	</li>	
	<li class="accordion-li">
		<a class="accordion-a"><h2>Приложения для двухэтапной аутентификации (для ПК)</h2></a>
		<div class="accordion-content">
		Позже добавлю текст.
		</div>
	</li>
	<li class="accordion-li">
		<a class="accordion-a"><h2>Приложения для двухэтапной аутентификации (для смартфонов)</h2></a>
		<div class="accordion-content">
		Позже добавлю текст.
		</div>
	</li>
  

<!--
	<li class="accordion-li">
		<a class="accordion-a">Dolor sit Amet</a>
		<div class="accordion-content">
		<p></p>
		</div>
	</li>
	<li class="accordion-li">
		<a class="accordion-a">Dolor sit Amet</a>
		<div class="accordion-content">
		<p></p>
		</div>
	</li>
-->

</ul> <!-- / accordion -->