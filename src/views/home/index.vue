<template>
    <div id ="homeIndex">
    <section id="e-content">
		<div class="e-IndexBanner">
			<div class="e-IndextHeaer">
				<div class="e-headerLocation">
					<span>深圳</span>
					<i class="iconfont icon-arrowBottom-fill"></i>
				</div>
				<div class="e-headerSearch">
					<input placeholder="毕业旅行推荐" type="search" class="e-search__input">
					<i class="iconfont icon-fangdajing"></i>
				</div>
				<div class="e-headerButton">
					<i class="iconfont icon-caidan"></i>
				</div>


			</div>
			<div class="e-swiper1">
				<Swiper :slide_show="imgs"/>
				12345
			
				<!-- <template v-slot:homeBanner ="props">
						<div>

						</div>
		
				</template> -->
				<!-- <img src="https://qimg4.youxiake.com/upload/201907/01/20321561976619.jpg?imageslim&quot" alt=""> -->
			</div>

		</div>
		<div class="e-Indexnav">
			<a v-for="(item,index) in homeNav1" :key="index">
				<img :src="item.thumb" alt="">{{item.title}}
			</a>
		</div>
		<div class="e-SecondIndexnav">
			<router-link to="/youlun" tag="a"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEWElEQVRoge3ZX6hUVRTH8Y/X2xXNQiv6I1IRGaVF0jUCC0oJo4yioqKI0ELJIgoSDJSCiqgoKazQoPKlKDAfol6E0iQMJOivClmmJoomWKk38+rcHvZcmzmzz/HMnJl71eYL+2XOPr+11p699t5rH9q0adPmBOZGbEdfHW17+b3jinqDrAz2uKKRIPvbccUJE2gjOVi0DUoOD3SQg5bDgxHkoEzt/22gJ4qtQTXeDnQgaAeawWV4ClvwJq5BR4tsNY08xjswGS/h58g7fdiJt4SDwLACtlpGmvEu3IDF2BHpl9X+xAe4G6fksDUgJI3fifewJ/KskXYAn2JW5NmA0ojz+7EMc/AOfm9Qp+Wci8ewsg6ndmMpbsXwhN5QXIdXhQUqr+a3eBqXNzO48ViAr+twZCsWYSo667DVjWfxYx22fsErwgpeiLwjvR7P40oMKWoU4zAPX+FwDvuHixpMC7SEtXgSFxc1chTGCHm9AgdT/PmjqJHkNFqNRzC2qHCDjMJ9+Djh17aiwl8mBKcWFWwSE1T79VNRwY8SgvcWFWwS16v2a1VRwUUJwblFBZvE/ar9er+o4NyE4OKigk3iOdV+vVBUcLraxehYYJlqv2YWFbwgIbirqGCTSO4GVxUV7EBPQvTCAnqnC/k0uYDGaByq8KeEUwvoHWGV6kAXNqgzEZvKGv/g4QZ1kvn5XYM6NTyUEO5V/346Q6hekieapRhRh85UYZBashMMFw7qySPX1TneHYF31QZY2X7AJTm0ppTtVr67Q3WRXphpqvOiD39jdsY7k7BBdpD9rQePi98hDcV8tefcEm4pFlacOSlOfiLUqv0MFyqZ3kjfvUJN+02K1mpcWqE1HmtS+s5rfoj/8YR42dQjLBIzsDnFsXVlxwmD8XZKv14swRvig3UIj7YwxiPcrjZXsloJr6m9YYDbhL05r9Yu3NSasOKch89yOLZZyO8szsLyHFrLcXZzw8jHEKE2jH0r3SssILF/MY2bhemd1NpYftYSNgjTZL1wjfkAzkzpO1LIz7+Ei+oXcU5K3y6cL+RqbBA6cJdQHq4VivyuDD9HC6v1CuEirlT2PTcr1Y7sAbyOM+oRKtOND7GvQu+gcFPQ3YDeMGHG7I34uaoeoYURgf62U7iNz8MkfC77guuwsB3lvTEcJ3176hNq6NwkC9vYEv/gUTRmSr/MirU1wiKXxXTh00XWCp91iInShYuEPSt2winhGbU5dJKQs6UUZ9YJuR97tgd3pPgzQ3xf3VL2cUy9AcboFA7PsX9oqzD1ZpcDzPpydm2F5hT8GulXEg4TE4TFaSxeFh+4JTi5GQEmmaZ6QcnT9gsfoUZF9EYJi1RWisR+73X01ClMN37LcK6ybcIVOTRnCUVCHs19WrivJunfO9OOgvuF/fS0OjQn4vsUvf62sdxvwBkhfK2eL9zELRBKp5EN6nXiHuHya5swRXfjC+HwUM9Jq02bNm2OPf4F2xBsH6sA0roAAAAASUVORK5CYII=" alt="">游轮</router-link>
			<router-link to="/visas" tag="a"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAADp0lEQVRoge2aTUgVURTHfxhET9Skdhq0i9AW5SZcSa5sEYSLhKBwowuxTQatXdYixQ8IclPiKuvVykhs40ooP0LyZQlvZyGhUoYv3tMWc4funDfvY96dN2+q+cNlmPO/9z/nMHPvPffegQgRIkSIEG40AQ+ANWAfOAyw7AMf1PObyhXgUWAMyAQcXK6SAR4CMb+DnA1BcG5lTvnnC8ZDEFC+MuZHkM1AWgivA51AnR8P8IA69dx14U9a+WmEISH6Eag3FTVEPZDA6deQqeiaEOw0FfQJnTj9WjMVTAnBoD/XXKjF6VfKVFB2fK9oAG4BT7E+tx2lswN8AqYV31AB33wROw/EyR7I8s2LcdWu3L75InYMGKH0xCIDjCodv33zTawRWHJpU0pZUnp++VYQxYqdApIu9Q+B98Av7V5/2ynFu7VLKl1T34pCMWIxYNml7gbWNDAo7G/E/aCqt+GisUzufDbwQEdd6r3CmthjwJZmTwFncU5bW6pevWontUYNfCsahcRayB54XgJHFH9DcE+U/bGw31T2I6q9HKBaSvDNEwqJxQW/DtRo/GvBtyt7u7DPam1qsFJNnY+X4Jsn5BNrJPttXtb4Ezjn0a9AleKq1L3NpYGTWtsOoZshexQOLNB+wS0KvkvwU4KfEnyX4BcF3+/BN8/IJzYtuAHBjwi+T/B9gh8R/IDgn3nwzTPyicmlUhJ4AdzDyl9XBX9JaxvD+sx1/jNwX2kkgJ+CT3jwzTPyie268OUsu5UKNMggi3l+2QIt9xuVn27F3qjso9eAq8BdrGxG7vvq2dAe8M0lsDvAFeAMcFHwFeujhUbdBcG3Cr5V8AuCvy34io26ch59J/gJwfcKvlfwE4J/K/iKzaNumVGHxncLblK0nxR8t8a5ZUZyyRZYoJA/120ADjRuE2cKuKlxB/zZNwpdrguFVy/zgmtT9jZhn1f20K5ewH09OgMcB3qE3e6Hj4S9R9WfcdEKxXoUoJrcOwzXgW3NtgecVlfbtq3q5dphqDbwrWgUK5Zvz+iLuJ8rwNslScj2jGw0AisubUopK4R0F9BGDKtPme7r5vpcTXwri9gFStupdxtd/fatLGL22cs01txoLwR2sc5enhOSs5ewnqbV4PTru6ng33I+umoqKE+8E4TzxHvYVPQcuf9hqDUV94ha9VyZB6eVn8YI+18p434ECf/Rf0Z2sP/8n2M6mrE6fgLnmWcQ5QfW6DqMT30yQoQIESJEMMBvxhNihz9wf6QAAAAASUVORK5CYII=" alt="">签证</router-link>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAADp0lEQVRoge2aTUgVURTHfxhET9Skdhq0i9AW5SZcSa5sEYSLhKBwowuxTQatXdYixQ8IclPiKuvVykhs40ooP0LyZQlvZyGhUoYv3tMWc4funDfvY96dN2+q+cNlmPO/9z/nMHPvPffegQgRIkSIEG40AQ+ANWAfOAyw7AMf1PObyhXgUWAMyAQcXK6SAR4CMb+DnA1BcG5lTvnnC8ZDEFC+MuZHkM1AWgivA51AnR8P8IA69dx14U9a+WmEISH6Eag3FTVEPZDA6deQqeiaEOw0FfQJnTj9WjMVTAnBoD/XXKjF6VfKVFB2fK9oAG4BT7E+tx2lswN8AqYV31AB33wROw/EyR7I8s2LcdWu3L75InYMGKH0xCIDjCodv33zTawRWHJpU0pZUnp++VYQxYqdApIu9Q+B98Av7V5/2ynFu7VLKl1T34pCMWIxYNml7gbWNDAo7G/E/aCqt+GisUzufDbwQEdd6r3CmthjwJZmTwFncU5bW6pevWontUYNfCsahcRayB54XgJHFH9DcE+U/bGw31T2I6q9HKBaSvDNEwqJxQW/DtRo/GvBtyt7u7DPam1qsFJNnY+X4Jsn5BNrJPttXtb4Ezjn0a9AleKq1L3NpYGTWtsOoZshexQOLNB+wS0KvkvwU4KfEnyX4BcF3+/BN8/IJzYtuAHBjwi+T/B9gh8R/IDgn3nwzTPyicmlUhJ4AdzDyl9XBX9JaxvD+sx1/jNwX2kkgJ+CT3jwzTPyie268OUsu5UKNMggi3l+2QIt9xuVn27F3qjso9eAq8BdrGxG7vvq2dAe8M0lsDvAFeAMcFHwFeujhUbdBcG3Cr5V8AuCvy34io26ch59J/gJwfcKvlfwE4J/K/iKzaNumVGHxncLblK0nxR8t8a5ZUZyyRZYoJA/120ADjRuE2cKuKlxB/zZNwpdrguFVy/zgmtT9jZhn1f20K5ewH09OgMcB3qE3e6Hj4S9R9WfcdEKxXoUoJrcOwzXgW3NtgecVlfbtq3q5dphqDbwrWgUK5Zvz+iLuJ8rwNslScj2jGw0AisubUopK4R0F9BGDKtPme7r5vpcTXwri9gFStupdxtd/fatLGL22cs01txoLwR2sc5enhOSs5ewnqbV4PTru6ng33I+umoqKE+8E4TzxHvYVPQcuf9hqDUV94ha9VyZB6eVn8YI+18p434ECf/Rf0Z2sP/8n2M6mrE6fgLnmWcQ5QfW6DqMT30yQoQIESJEMMBvxhNihz9wf6QAAAAASUVORK5CYII=" alt="">自由行</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAACYklEQVRoge2Zv2sUURSFv4hkMYgIaVxiKi2sLUIKKxEhf4AiqAjWEsVGi4CFYGEvlqIIghYWIrHQTlgxhYmIqVKpqUQDMZCoRIsdw86dH+y9b3d8F96BC2Fnz7nnYyfLzCwkJSUlJSU1qnPAR+AX8Cfy+Q7cB8a1kKcjKG+ZB1rQNxGUtswnLehWBKUt81YLKgNi1VPyPW9rAzyAHqb4RTmtDYkddAR4Qb7jkiUodtCrFDuesQTFDHoF2Cbf7xXdT1mt//3tqZk14JAF0hPoFnDcCukFdA04EQLpAXQbOBoKWQYag96T73R+EKExgt4k3+nxIEJjBJ2i+D/aCg2NEXQE+EK+18nQ0BhBAe6S73UnNDBW0BnyvT5jvCL6p1hBW8A6+W5TIYGhoDPAaklO1axmnn70RHhvGfrtKBRUA9kL24/OCt+yod+OQkGtVzz9aB+wKXxHDB1Li4b6BwkK8Ez45gwdS4sOy2/dc0H4TE8XQgpo/dY9+yk+qTSdvrGDAswL7w19TR+gF4X3g76mD9Bx4Kfwqx+peAAFeCn817UBXkAvCf9rbYAX0Anh/w3s1gRsiIA9ygJNgUL3DqY3Y1JjXhHmU8Auhb8p0L10fwQ2gz4sKeFhvqL7QJim+Njfw5hu2a45g+0AYxZQgGPAI+BbBCB1cy8EslcdETwPtLOR15wdB3sqJe8U2j3H2uLYpoM9pgIHxLF1B3sqJU+p59nig9nfwzp1h7WnUrNiSd3MOthTqRaw2MfyJcJ+D2lqT60mgHc1yxez93jZU6tR4DKwAPzIZiF7bdThnqSkpKRm9Rc0oPRSA5c1rQAAAABJRU5ErkJggg==" alt="">房车游</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEN0lEQVRoge2aS2hVRxjHf1cvaq3B+E5VKijiK2JEqChiF+IDtAtR0E1RRHSnWQha7aJQJKJShUhbRJBSRMSFxOfCtKBEF258UbVQX1GMBh+RpKK1Ji5mrp58M/fkzMwJ3sD5w2xm5vvd/3fOmTOPcyFTpkyZMmXK9Kk0C6gBzgNNwGtdmnRdje7TY7UIuAZ0JCzXdEyP0SjgNMkTlOWMZpS0vgKa8U+yUJo1qyQ1E2jFNP0WqANWAWOBvkAZMEnX1ek+Mq5VM0tKI4DHmGbrgckJ4icDZy3xj4GKbvDrreOYJn8CejsweusYyTmRqtMALcI0tzeAt9fCK4m3cQOdTTUA+QBevgjzk2oSnQ21A9NS4E7TrCg7yVjvNm0RZupTZNcL9pYU2c46KcysT5G9TrBPpsh21h1hpjJFdqVg3xHtFUA1ahXWCLwB2oBbuq6aFKemNmGmLC0wMECw23T9IGAfamPQ1Qrrte47KNTMOwHuFQqMKCfY74AZwH26TlCW+zrWW88FcGgITGiIYL8EWnBPslBagKm+ZuQ2bLYvyKLZgv0fpvlGYDMwBeijyxRd12jp/wAY7mPmkABt88vJqq3E36Fa1AahmPrqPjJuv4+ZtQJyAzW2QpXTrGJJ7nBg7RCx/wMTXA2NQL3Wo6BlrhCLllE8yeu4LTHzOibK2O5j6jcBeUjY63wwaiwVS3SNB/NbwbjoY2w85oviD6CfB6ufjo0bm6M9uCMF46kHA4AfLYbOoaaIpBqKOhXsaprw3RlJjpfyqMQk7C4wPUH8dOCeJf4C5lz9pYe/CsF47sH4oIHAFYvZV8DSmLjFuo+MuwoMAy6J+uUe3pYLxiUPRieVYybbDsyNianEPBy7olkAu0RbA25TWA5zI7/LId6qctRAj0J/TxD3M+ajNVi3VWHe7Y0OnjZa4qsc4q3aLYAvSbZVGgK8ELE1kfY6zKdkE/F3Nqf7yJOKusTZFNEXmFun7xzi5ZKvlY+P7xjMC9EBnEItWqQqUCf+sn+LZgVpp4A+AD5ziP8c82x4a6R9PuYqrAN4AiyJ9PsG+9eCN5oRpHLMU3qfY5VNgvEItSMpaB7mO6ADuA30Ry3kb1ran+nYYFVbDLrczYJsF2xlpH0A6qgk2v4vnefqSl0X7fMX6kIEKWf58e8DeHsE61yk7SDm3VptYayy9NsX4AlQc6QcC8MCeBOxn+kuxDT/awxHXpR2YE6AL/YL4OEQmNafglkL/CPqrhM/PMpQS9BozFXcvgd9UB7ztZ/Gd5IVginH3FuSHXZ9jfl0rPYxNFNAmgn77lJQH+yfIQvlgAPriIj9G4/TSnmaftQVEKNfsCf5CrdP/+Mw598Frma6OsAq1VLrmuiGEjDtU465JlqFOdh7QvnBNVFQ26CmbjL0AvW3gcuoY8pQXjPqsfVZtWXKlClTpkyZYvQeV40cO4l+npcAAAAASUVORK5CYII=" alt="">分享会</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAACrklEQVRoge2Zz04TURjFfwlJiZESnoANGwIGcNdXwJ1V3NRnYMNTwAJQSuITuNGlbjTGlzC2wKIYkAcQQ6ipqYt7G6dfp8N8t9f5U+9Jvs1Mz5lz0rn3fncuBAQEBASUB5vAFdCfsK6sVmHhI2Q0bCGxhL+Qg1rKNEFKbOM/6HamCVLiHcMmdxw0doTG+8i9ReAD0I3c79pri86ulbgH3AiTyw46y0LjxmoDfGT8P/95Au8qbIoHf5tAqyO0Htnr14wP2p3geYlYAfaBFnCbYCCr+g18tZ5WfASsAE0rnHe4pNCv+PvKO4VMGidFq0/WsxrHBTCvraY25CrQEyKnQB2Y14r9A8xjvJwy7LGH8Z4aB0LgBFjw6dQTFoA2w14PNAItQa57NugTdYa9tjTkaDfSpxiv6zhUGfaqWmPlIC86nP36DFoBngGvMV1QF9P1tOy1LRyXhQhyD/oYOIvRk3XGZPNAbkFngN0Ynbtq13K1yC2oS8hoWC1yCfo0ht8FXgA1YM5WDThidIbvW41M/LoSK8CF4H4HHiZwNuxvopxLdBNU5kEbgneLCXIX1hnd/j3PwK8z8Y3gadox2Xa+VXAzD3oueDUFtya45wpu5kHl66cZZ7OCq2nlMg/6A/egc5Qo6IngTe2rKyejlwrukeAWejKKW17WU/DWKNnyEtcwXJK8lm7Y30jObAZ+3YmYbZfkR1vA+7aSWsAt5TNzCQqwF6ORtvYcnpdb0BlGJ5c01aRk27QBnpB+463dsXjx6ysomAmqgVkuOsAvWx17rcEUfErJCs5+y/S5U7aO1xpymT9gf9GQ5d6wTXmOJA41Ag8Yf8hU9enUEVWMF7mJ6GG8q1DGY8NjbUj4jw6CB2Gn/mg/ilXMIG9jFvu8w/3EzK6HOIzJgICAgIAAT/gDxRSIxClVansAAAAASUVORK5CYII=" alt="">游侠旅拍</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAABJElEQVRoge2ZQQ6CMBBF/xW8gspZ3LjxmoqnUjDRhAQuoAvKhkhoh87Qhv+Svys/8xIIhAEIIYTkywlABeAbIbXrS5IH4kgOedqO709MySFJslnRvSBZiq7VoQ5FjTvUyfYZLQCUANo/A6SS1s14lEoeADQJiPimcTMHUyYwfGiuEtGUb9eptBLRccnOI6HnY2Q852LR0GusoKhmAUUVoahmAUUVoWisgjP6n1dzXyuVO6uFumjIb823ZIBIcy4u8JXUvpUpGqvg9efMVD6SASLNubjggn5tMCdZu7NarPJ6WQOKmhUYQVGzAiMoalZgBEXNCoygqFmBERSVFlitGMxXEptZMuW4NrxJRDezCAb61f4dQJeAyFQ6N2MhlSSEEEKE/ADf+yDOuunEBgAAAABJRU5ErkJggg==" alt="">游侠集市</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAB0klEQVRoge2avUoDQRRGT0yrvYVEY6/iA4gWFrFOK7ZpRcU+jxIQ3yBptNFSfQGJPwjBgBIIMYWQYi02YnayTeK9znUzBy6k+uY7MPs3BAKBQCBJCXgbzp7nLqq0gGg4Lc9dVImcySxBNGv8G9Ed4JHxwj6mB6xqiTYNCI7ONZDXEPUtljansyL6Caxri/pgEeg4PW4R3sIWRAH2U7ocSS5gRRSg7nTpA8tS4ZZEl4AuyT7nUuGWRAFqJPu0pYItiW4CA5J9qlLhVkTzwJ3TpQXMSy1gRfQ4pUtZcgELokXiO+xoj7r0Ir7fgtKmh+BjxbJoRVoS7H29XAA5DdFt4MGA4PeWLWhISuCWzSxBNGuYF10hvvh934Ai4BnY0pCcA64MCI7OvYboiQGxtBFljfjwybeUqmgeuHHCO8SHUz5QEz1MCT+QXGBCVEQLwIcT3JAKnxIV0TMntEt8GOUTFdG2E1qTCv4FKqJVJ3QAbEiFT4mK6ALJ/xtEKBz7T4jaXbecEi567D8hqi8MDSe8T/ze6wNV0SLjjxkrI07FgNSfiOaASwNio9PUEIX43NTS9+iulqgU6tvPCkE0a8yM6As/kk+eu6hSAl6B9+HvQCAQ4Aui8SQVmOx3EQAAAABJRU5ErkJggg==" alt="">别young之旅</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAADVElEQVRoge2avWsUQRyGn5hDY7AOWES4iCGIH6TSzk7EQoIoaiGChpD8A35ACqv0ooWCja2JhYWiXoojSkQlCjYK4oEhIIjkQxMvMbmLxUzI7uzc3u7M3s1G9oFfszvz5n3ZmduZ2UBGRkZGRvrpAW4CReA7sAqsy1qV14qyTY8Df9bsAx4DVTaD1auq7NPtwK8RF4Ay0QOqVZYaqWaYeE8x7OkON9l7ZK6gN/0GGADyQM7TPievDcg2ur6Xm+Q9MnlgCb/JBcQQbInQv0W2XVA0loCuBvg1ZhS/wXmg10CnV/b1ao0m5NGaPFDBb+68hd45Rasi/4ZzruM3Nol/uB5FvCfHgRLwW9ZnoABcAw4ompOK5o2GuY9BgeAPSA7oBz6h/5HR1UfgIrBNanjvFZqWJoQZ/KZOES+gWu+Bk8q1maalCWEF/3zyLvNM6y/+eb/StDQhRDH+DbgH/PJcWwQeIeZrFA3nhJl7DZxAzDtdW4AdwCXgSx0t53jN/EEs38rAEMHFQpj57cAIsMbmcE1t0HlgEDgSoW0t88eBZwQXDs5Rg0ZtW898FtQVWdA6bf+7oN3AVcRaVw06Lu/pjk+2TNBjwATBcLVqQvbZIPVB24C7mB2pVGXfNlIedIHgFkutNYL7V7UmCZ42OEcNoZquAGPAaWC37JMDOuW1MfTBVS3nhD2ZD8DhCBqHEPvRMC3n1DL2BNgZQ2cX8DREzzk6U1NAu4FWu+y7JYJWEEPRlIPo57pzVENJHE8+1Og6RzXUl4Bmn0Z31qAWEUc708ADLI9NVUMdNmKSDo1uEjUH7Dc11agh1oig64j3diKGWk2FPLRqdE2G7iziY7NX56epKXVN22kq5KFT0axa6iUy6pYVkX5LU0gNr+aypV4iQb8qIu8sTQG8VTRLlnqJBL2lEbJdMKjT4baFHhp/RuQ1QiXMl4AljZ7tZ8PE3gxFjdhL4i3q29CfSBRtjEkSC9qF/uNSiejbNN2TXAX22hiTJPquH9IIbtSUvL9Hts0hAgxSe7eyLvvY0q1o1jupjMQItU3HrTnEL7pNTRP8hvMiiaAgvozptllpqTNJBQUxXF6lIJRa94n270Cx6QHuEFxUNKuqwA/gOXC2EQEzMjIyMmz4B75rSENz5nB6AAAAAElFTkSuQmCC" alt="">瑜伽行</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAABB0lEQVRoge2aQQ6DMAwE93v0/0+o6KlPiNpDg8QhKAnY64TuSL5V7g602JEAhBBCCCEMWQCsAD5OtebvCGUBkOAnuVVCsKznnSzd2TBYkluF4R1EomwkOkn/YYJIlI1EM63r4dGaN41oz+ZU2nxuKfo60Z9GLcgDP4Ga5DN/tta/5cIlAG8YHwLYD6OeMj0EjCxqmoct2vI3uIVoWJ5aY/YcDRNlz9EpRC3maJio9Ry9muc0ehgF9ZcoO4h3/zBRzdFCaY52BA8T1Rx16i9RdhDv/hJlB/HuL1F2EO/+Er3KfvMpbTbs/mZ5vN8p8qrud5VmlNzL/oVo10+5dUkfrY4ODUIIMQZf7iBPaWZzQ3wAAAAASUVORK5CYII=" alt="">同城会</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAACbElEQVRoge2avWsUURTFfwlpAlmwSCekimTb7USLsEkQEbSwEVv/DT9qC9sUWcHOdJOA0Tp2QQS7rUwjyAZB3CSCsLD5KOYOhJf3dl9275s3a96BC8Psveees7PvY2YWEhISEq4RZoAW0JdYl3P/Fe4DbeDMiDawFlGXGhaBT1w2aMaW5E4cbgBvgB7DTRbRA14DcxH0XhnTwDPgALuZPvAOeA+cOHI6wjFdsnZv3AW+4b5iu0DjQn4D+Dwg/ytwuxzpflgANoFT7IJ/AI8dtVPAU8mx1Z4K90I4+cMxC7wE/mEX+Rd4LnllcqnC5yrcHIHX59fxZEztXmiQjzXXuPqCzri6w9XGuxrmgbeUO1MWM3jH0fNENM1rNXwIdB3Nylj7agxek7vAI41GvxwNyt7NLALbDi1/NBr0DdI2cE+DeETY9s19DWLz26vCHccMl3WNDXVCwS0gA44kMjkXTVcIo0vYJ7iufBZFVwijmYW3iCyWrhBGjyy8F7d7UXQlo2Pg2vx067gno3osXaGWlyXyq3cskeE/4wbRFcrouEhGK0OohGQ0JuEKsAF8J7+v7MnxBrAaUZcaYZ3Bj16K2MV/WdHQpUq4TL5sDDNZxLHUhNalSlgHDi21w+KQCdowTAF7lrodoEn+fGlOjncseXvCoa1LnXDNUvNqQP4LS77Pq8ToRltG/kePmg9GTSuALnXCfSO/6VHTNGr2A+hSJzSfv9Y8ampGTS+ALnXCUQWU1Se6gGRUuU90Acmocp/oApJR5T7RBVTOaFUjGfWF6z8EVYoDDaMPhOg3+Sv02KaKKPT8FI0JCQkJk4Fzp6sT299q0WoAAAAASUVORK5CYII=" alt="">民宿</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIyQ0YyMTNENzg3NzExRTk4NTg0RTlCQjE1RDRDNkE0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIyQ0YyMTNFNzg3NzExRTk4NTg0RTlCQjE1RDRDNkE0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjJDRjIxM0I3ODc3MTFFOTg1ODRFOUJCMTVENEM2QTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjJDRjIxM0M3ODc3MTFFOTg1ODRFOUJCMTVENEM2QTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz77i3t8AAACUElEQVR42uyau0oDQRSGNyKiYIKVYisikihqYx07wUJIZ6O9nbWglgqiERL0MdQiFmKjT+A1FwuxSqFJExFjIvEfmMA67mx2k71mz8AHW8zJzAczJ7NnNtRoNJQgtB4lII1ESZRESZRESdSOxg4MkkNDFByALPhiXW2GjfHEx4xa7qch2gdS4McBORls7BMwYJcok7x0UVDkis/JctG0hySbpKwWjYG6MEgBJEDEgXQR4WMVhDnU+dwsEz0UBsiDIRfyIxszJ8zl0ET8MEcqmhV+POHin0FCmEvWQEwc3Kli2HNcS7Qq/HjERdGwMJdqixWQBDWN/X2nJSp2EhvLfkegBMr8uc9G2VbzCYFVUNRJZG2JJjX67LokOgNuDGTstkRLGn1KDosO8ZVUk4i9d4Poms4y/QTbYN6upbvnoKiMczDGY6atTEZll5KRyDNYEmIsEXX8xUpnmW5JDvxS0V6fvVWegQ3wYjbQT6JsmWaCUGHIdBJMNSMSJVESJVGTbTIoordgB/R3VjzyzxGQ1bIWJTHSI6Af9+gEuACnYDwIyWgZPIJ9xUi10kdLN6VTWXgD62CuG17TWJsF1zr7t9gtoqyx6t8KeLWrOOYV0WZjL96boGJW1EsF7EFhLhWdvqPgWDFRwPbylcSDgZg4uFfFsOcFI5dMOcU7l0xJE/EjnL//KirRKUV+bRh2QDDMx8or/68Np9re6D66CE53lNGCfrXflO36jzXULcaTAEsM3w7IffDsmuxkT8pEQ/RhMomSKImSKImSKIm2ar8CDACVL7i5BZMhcAAAAABJRU5ErkJggg==" alt="">视频</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI3N0M5NEU3Nzg3NzExRTlCMDkxRjA2RTIyNkYyQTE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI3N0M5NEU4Nzg3NzExRTlCMDkxRjA2RTIyNkYyQTE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mjc3Qzk0RTU3ODc3MTFFOUIwOTFGMDZFMjI2RjJBMTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Mjc3Qzk0RTY3ODc3MTFFOUIwOTFGMDZFMjI2RjJBMTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5OA8riAAAB30lEQVR42uyaPUvDQBjHEy1OWjsI4qSziquTWxfr1o8gXZz9AG5Oog52FPwSgpuLix9Aqg7iIOrmCwjWl9b/AwnEM/Eu9mwu6f+BH+XK9XK/JPfcJT2/2+16gxBD3oAERSlKUcdDsu5vxMQs2AYt8CpNZMwtWNZ6pBAdAXvg0wG5H7I6D183j/q+H0oegqrDd6ZvY4zuuCxpa4zOgQ/lVrkEdVAOm1HQHjZlfW0bOo+SQYMNMBwpi+QieCzaFW0pZ69u4Qr1/YqaJKN2kIzCGAfPMQf99jODTqapr21Dl4xMRE065bwol4AUzWmU/rn9GbAWnNADcOby9GIyFah1JDNvgffId7LoaIIJV6eXv2TdOzCV0KQsNCpFmV7SRiGmlwtwk4cloMl4ekp4IF4NTqasrNbBQ0y9l36MUVuijcgDuSSgTTAaU28S7INOpL2NPCUjiWmwBE7AtaaTC6AGTsFxD6J9T0aZjDqudSlKUYpSlKIUpShFKUpRilKUohTNkeibUi4XVfRKKVeLKnqklOUNXyV3pgavO+e95M0aY1l23bP8Xlei6bm3icr6e135GJgNVZJ5V4Ir23HQ897GGFVDNljtgvPgBGR928ofWLWeb12ujChKUYpS1GJ8CTAAzdY4PIYf86sAAAAASUVORK5CYII=" alt="">游记</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJDODVFM0Q4Nzg3NzExRTk5NEM0QTBGOURDOThBRjlBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJDODVFM0Q5Nzg3NzExRTk5NEM0QTBGOURDOThBRjlBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkM4NUUzRDY3ODc3MTFFOTk0QzRBMEY5REM5OEFGOUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkM4NUUzRDc3ODc3MTFFOTk0QzRBMEY5REM5OEFGOUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6kjDwpAAABMElEQVR42uzb0QqCMBSAYRddFvQSos/Sg/U2vkB02aMEdSeK160NFojkRra5mf+BQ0Jy5GvuKM6ElDJbQ2yylQRQoEsN3YzG0kSuslLZ6N09ZWNq5rNZHNBCZe0ROMzaHCM69BoQ+c5qDqiwXUeFEE/9EXj2dCr3vqCjFgd0+KUvdJC6NguXl7mbf/Du7WhGw8KxYdbubbP8y6l7UHmy7ZBKM/LSvZVltHtvExkR4eEH23GvCxQoUKBAgQIFChQoUKBAgUaKb58wSEYUKNCk52jKjzsZ0ZjQ9sMIT8l+dClCLwFqnu2TJc4iU5n5fWVA1yp/WdoPBdWh312ozGk8FdiaGoVr0GItMgUJVryBAgUKFGhi0Htv+7FoqePO6GiwN7O9WIvgzwNAgQJNIV4CDAB2hQGSarpR+QAAAABJRU5ErkJggg==" alt="">目的地</a>
			<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMxNDk4QTU1Nzg3NzExRTk5NDY0RkNBNzFEMDVGRTk2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMxNDk4QTU2Nzg3NzExRTk5NDY0RkNBNzFEMDVGRTk2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzE0OThBNTM3ODc3MTFFOTk0NjRGQ0E3MUQwNUZFOTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzE0OThBNTQ3ODc3MTFFOTk0NjRGQ0E3MUQwNUZFOTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DWujiAAAGEklEQVR42uxa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" alt="">圈子</a>
		</div>
		<div class="e-IndexRaider">
			<div class="e-gonglv"></div>
			<a href="http://www.youxiake.com/gonglue" class="cover"></a>

		</div>
		<div class="e-Indexrecommend">
			<img src="https://qimg4.youxiake.com/upload/201907/03/89861562143301.jpg?imageslim&quot" alt="">

		</div>

		<div class="e-IndexLocal">
			<div class="mIndexLocal__blank"></div>
			<a href="#" class="mIndexLocal__img">
				<div class="mIndexLocal__img__pic">
				</div>
				<div class="mIndexLocal__img__bg"></div>
				<div class="mIndexLocal__text1">深圳玩乐</div>
				<div class="mIndexLocal__text2">像当地人一样，体验最本土的吃喝玩乐</div>
			</a>

			<div class="e-LocalTop">
				<a href="" class="e-topLeft"><img src="https://qimg4.youxiake.com/upload/201906/18/54311560825561.jpg?imageslim" alt=""><span>深圳哪个沙滩最美</span></a>
				<div class="e-topRight">
					<a href="" class="e-daka"> <img src="https://gallery.youxiake.com/Public/Data/upload/201901/30/51491548816731.png?imageslim" alt=""><span>深圳网红必去...</span></a>
					<a href="" class="e-tubu"> <img src="https://gallery.youxiake.com/Public/Data/upload/201902/20/83911550643793.png?imageslim" alt=""><span>深圳徒步....</span></a>
				</div>
			</div>

			<!-- <div class="e-localBottom"></div> -->

			<div class="e-localBottom">
				<a href="#" class="bottom__box">
					<div class="box__location"><span>深圳</span></div>
					<div class="box__pic">
						<img src="https://gallery.youxiake.com/Public/Data/upload/productimg/201903/20/5c91fc0f8be3d.jpg?imageslim" alt="">
					</div>
					<div class="box__title">[游侠夜跑-第十期]7.11周四晚：炫酷的荧光夜跑，我在深圳湾公园等你来燥~！（免费公益活动）</div>
					<div class="box__price">
						<!----><b>免费</b>
						<!---->
					</div>
				</a>

				<a href="#" class="bottom__box">
					<div class="box__location"><span>深圳</span></div>
					<div class="box__pic">
						<img src="https://gallery.youxiake.com/Public/Data/upload/productimg/201703/16/58c9f5c0e0f56.jpg?imageslim" alt="">
					</div>
					<div class="box__title">[游侠夜跑-第十期]7.11周四晚：炫酷的荧光夜跑，我在深圳湾公园等你来燥~！（免费公益活动）</div>
					<div class="box__price">
						<!----><b>免费</b>
						<!---->
					</div>
				</a>

				<a href="#" class="bottom__box">
					<div class="box__location"><span>深圳</span></div>
					<div class="box__pic">
						<img src="https://gallery.youxiake.com/Public/Data/upload/productimg/201812/21/5c1cb39f4e7c3.jpg?imageslim" alt="">
					</div>
					<div class="box__title">[游侠夜跑-第十期]7.11周四晚：炫酷的荧光夜跑，我在深圳湾公园等你来燥~！（免费公益活动）</div>
					<div class="box__price">
						<!----><b>免费</b>
						<!---->
					</div>
				</a>



			</div>


		</div>
		<div class="e-IndexClassified">
			<div class="mIndexClassified__container" v-for="(item,index) in homeRecom1" :key = index >
				<div class="mTitle">

					<div class="title__left">
						<i class="iconfont icon-tubiaozhizuo-"></i>
						<span>{{item.content}}</span>
					</div>
					<a href="https://m.youxiake.com/qinzi">
						<div class="title__right"><span>更多</span>
							<i class="iconfont icon-arrowRight-fill"></i></div>
					</a>
				</div>
				<div class="mIndexClassified__content">

					<a href="https://h5.youxiake.com/hz/768">
					<router-link :to="jinxuanNavList[index]" class="content__banner">
							<img :src="item.banner[0].thumb" alt="">
					</router-link>		
							<div class="banner__info">
								<div class="banner__title">{{item.banner[0].title}}</div>
								<div class="banner__price"><span>￥</span> <span>{{item.banner[0].price_label}}</span> <span>起</span></div>							
						</div>
					</a>
					<div class="content__route" style="margin-top: 0.2rem">

						<a href="#" v-for="(item,index) in homeRecom1[index].data" :key = index>
							<div class="route">
								<div class="route__img">
									<img :src="item.thumb" alt="">

									<div class="route__city"><span>{{item.place_label}}</span></div>
								</div>
								<div class="route__desc">
									<div class="desc__title"><span class="route-title1">{{item.title}}</span></div>
									<div class="desc__price"><span class="price__fh">￥</span>
										<span class="price__jg">{{item.price_label}}</span> <span class="price__dw">起</span></div>
								</div>
							</div>
						</a>
<!-- 
						<a href="#">
							<div class="route">
								<div class="route__img">
									<img src="https://gallery.youxiake.com/Public/Data/upload/productimg/201711/15/5a0c151c8f5bb.jpg?imageslim" alt="">

									<div class="route__city"><span>全国各地...出发</span></div>
								</div>
								<div class="route__desc">
									<div class="desc__title"><span>[游侠宝贝 ? 奇幻斯里兰卡]2019南</span></div>
									<div class="desc__price"><span class="price__fh">￥</span>
										<span class="price__jg">4890</span> <span class="price__dw">起</span></div>
								</div>
							</div>
						</a>

						<a href="#">
							<div class="route">
								<div class="route__img">
									<img src="https://gallery.youxiake.com/Public/Data/upload/productimg/201612/26/5860d1f8988ea.jpg?imageslim" alt="">

									<div class="route__city"><span>全国各地...出发</span></div>
								</div>
								<div class="route__desc">
									<div class="desc__title"><span>[游侠宝贝 ? 奇幻斯里兰卡]2019南</span></div>
									<div class="desc__price"><span class="price__fh">￥</span>
										<span class="price__jg">4890</span> <span class="price__dw">起</span></div>
								</div>
							</div>
						</a> -->

					</div>

				</div>

			</div>
		</div>





<h1>这是分界线</h1>


		<div class="e-IndexLine">
			<div class="mIndexLine__header"><span>热门目的地推荐</span></div>
            <div class="mIndexLine__nav"><div class="nav__header"><div class="focus">国内游</div><div class="">出境游</div><div class="">周边游</div><div class="">同城会</div></div> <div class="nav__body"><div class="focus">热门</div><div class="">内蒙</div><div class="">新疆</div><div class="">西北</div><div class="">贵州</div><div class="">广西</div><div class="">四川</div><div class="">西藏</div><div class="">云南</div><div class="">秦晋</div><div class="">华南</div><div class="">华北</div><div class="">华中</div><div class="">华东</div><div class="">更多</div></div></div>
			<a href="#" class="body__line" v-for="(item ,index) in homeLinesList" :key="index">
				
				
				<div class="line__pictrue">
					 <img :src="item.thumb" alt="">
					<div class="line__type">{{item.product_type}} | {{item.place_label}}</div>
					<div class="line__box">
						<div class="line__price">{{item.price_label}}</div>
						<div class="line__day">{{item.days}}</div>
					</div>
				</div>
				<div class="line__content">
					<div class="line__title">{{item.product_name}}</div>
					<div class="line__desc"><span>{{item.product_cat}}</span>{{item.sub_name}}</div>
				</div>
			</a>
			<!-- <a href="#" class="body__line">
					<div class="line__pictrue">
						 <img src="https://gallery.youxiake.com/Public/Data/upload/productimg/201906/28/5d15b9ae48440.jpg" alt="">
						<div class="line__type">跟团游 | 丽江出发</div>
						<div class="line__box">
							<div class="line__price">￥1280起</div>
							<div class="line__day">7天</div>
						</div>
					</div>
					<div class="line__content">
						<div class="line__title">[滇西北精华]王牌线路，避暑首选，每批成行！
							丽江-玩转泸沽湖-普达措国家公园-香格里拉-松赞林寺-虎跳峡-束河古镇，香巴拉秘境7日深度游（全程品质住宿、半价加购接送机）</div>
						<div class="line__desc"><span>深度游</span>&lt;丽江集合解散&gt;玩法、住宿、服务2019全面升级</div>
					</div>
			</a> -->
			<!-- <a href="#" class="body__line">
						<div class="line__pictrue">
							 <img src="https://gallery.youxiake.com/Public/Data/upload/productimg/201906/28/5d15b9ae48440.jpg" alt="">
							<div class="line__type">跟团游 | 丽江出发</div>
							<div class="line__box">
								<div class="line__price">￥1280起</div>
								<div class="line__day">7天</div>
							</div>
						</div>
						<div class="line__content">
							<div class="line__title">[滇西北精华]王牌线路，避暑首选，每批成行！
								丽江-玩转泸沽湖-普达措国家公园-香格里拉-松赞林寺-虎跳峡-束河古镇，香巴拉秘境7日深度游（全程品质住宿、半价加购接送机）</div>
							<div class="line__desc"><span>深度游</span>&lt;丽江集合解散&gt;玩法、住宿、服务2019全面升级</div>
						</div>
			</a>	 -->
		</div>
		
	</section>
	
	<div class="e-mBottomNav">
		 <router-link to="/home" class="mBottomNav__center" tag="a"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAvCAMAAAB9ntLFAAAAeFBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZma6PfNKAAAAJ3RSTlMApvkEaZZZDPDdvVDkyBT16S4gGtOsjUA2JNh5cV9HnoWzgGYStmNPT5YBAAABiUlEQVRIx92V24KCIBRFETQV8TLeUkuz2+z//8NJKi0vSDNvs57y5EKBzZHMkuQVFcYX0cZz0EH32gLFsWBxTpHrCdsQp6fZ6ghfDqzhYad1IRYwGBmU3ZoQuOBsuNxQrEzf9uHbr4UaMFUC43CD99IZqBWCAVGOi3vQzaJhwZnZ5x2otyDsEG7n6i1oMyuYi2Pl80N5FGfF6xbTbCg36yBnOM3GMixD9L6KZQSDqGBHiHKSDSU2h5sMV6nMxmqAqqDPhvytoaSX56xEQjQI5Kv02dAhccFvioewIJrEojuUHCbRZouKkBCBvsFACXEQ6xsxnC4yaWNrjX+LBoch1wwQbtUQJd8RRASIuNuZvU8BZOqFpaBAZPW7fqnBlYaHK0lGXUad3c3kf3N8PFoHcHiibzSQ5PqGCYnxFyP7/Bn/1Djj8KHRwB/1eUm2bNghXk87SyFxWf/dsaYdP9r02SwzeS9zYV3kAIWANzbYFa84xaPhP5jrsqz2Q9yh7iF+tPxjdC+0Nvk1PyjmLwkmwCCNAAAAAElFTkSuQmCC" class="img1" style="display: none;"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzJmODZmZS01ZGI3LTQ1MzgtOTk5MC1iNTJhYTc0NmE4YTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkM3NUVBMzg4Mjc2MTFFOEJCQ0ZEMkM3NzgyREVCNTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkM3NUVBMzc4Mjc2MTFFOEJCQ0ZEMkM3NzgyREVCNTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmE0N2E2MDQtZmM1Zi1hNjQzLTllOGYtNWViNjg2OTQ5ZTgyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Njc4MDE3ZTItODAwNC0xMWU4LTk4MzIt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" class="img11"> <span style="color: rgb(51, 51, 51);">首页</span></router-link>
			<a href="/orders" class="mBottomNav__order"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAYAAABDV7v1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzJmODZmZS01ZGI3LTQ1MzgtOTk5MC1iNTJhYTc0NmE4YTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjI0MDA0QzY4Mjc3MTFFOEEzMjVFRjhBOENERUU4REEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjI0MDA0QzU4Mjc3MTFFOEEzMjVFRjhBOENERUU4REEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmE0N2E2MDQtZmM1Zi1hNjQzLTllOGYtNWViNjg2OTQ5ZTgyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Njc4MDE3ZTItODAwNC0xMWU4LTk4MzItZGE5YThmODNkZTNjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+V3NF/wAAAnhJREFUeNrsmE1IVFEYhr+xyaI2GoRERVkbC4o2LZSCiugHI8SEStq4aCaQNiIkCi36WUS5qUUMQRBCYUFBi2rjJiOJFmYoqUGLFgZuCiLDn5rej/teOQyDc854R29wXng458z9Oe/57vkZvkQ2mxUbpdPpsLoCdICLoErs9QeMgivgsf6QyWSsH06kUilx1DXQJYvT6dCsrcqK6CQcWb0O1IFVxgAvu3aaz6h+2ibwCHwBs6DPuL6e5QvHvmbALdZrjL4+gjkwAV6CdrCxkNEjYAw8AWdANUgyIlFoxjCYG5wN4Bi4yQBdByvzGdXP8gpsB585sl1gLTgkpZEusN00tAU0gqdsd4LnoNw02spF8pcreifoBsNgKuflYbuyCGPlhkFT+um/gmfgFDgAJhnhq6HRreAG0H3qLOtzC3TWz/I2qHA02c76aIF7X4OT9NEGNpdxP9TP28O5WUga8V/gHPjOAdowzXknYZQK6B3o5RppUaNHeeGuZWQ+gH2cz1MOEdVp9YmLtNfymYcsDya5eFRDDp2q2eNSeo2w3KYRXc3Gb4mffizmZFoWeaPeqDfqjebXoMNR6Up/lEYnShgsq/+6ScuX1fs56o16o34fjWZ/jNpoMftoIkqjfh/1Rv8Ho9OsV8TQX6VpdJz1mhgarWb5TY0OsNEYQ6MnWL5Row/YOC9uOflSS1OeF3h49KjRtxJkj3WOatpvXQxM7qGnNQzkULjqWyTIT9ZKkBPVVN8O3rhU0kAdBvfBe7BJgpR8q3kyTdKkph3rJEjidi9jRDXzdwdcEubEkjnn+X7QAJrBXo5qqfbanxIkeDWK9yTI48/rnwADAKRWn7AkYRjRAAAAAElFTkSuQmCC" class="img2"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAvCAMAAACi0KjaAAAAyVBMVEUAAABERERERET/yQBERERERERERERERERERET/yQBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERET/yQBERET/yQBERET/yQBERERERET/yQD/yQD/yQD/yQBERERERERERERERET/yQBERERERET/yQD/yQD/yQD/yQD/yQBERET/yQD/yQD/yQBERET/yQD/yQD/yQBERERvYzRlXDd6azBLSUG/nBfcsA2w+E6fAAAAO3RSTlMA4Q/w/AXUevf26IcQCQO+t6OOGPKcc1ZSNywiHufb0MnIxqunn2hPSkZAMfrj4tyzqot9a1lFQDosFLXbcXYAAAE4SURBVDjL7dXJUsJAFIXhE+nMATIAMsk84zxrDqC8/0MZIgpCQi+lSr/1v+jbVX0b23K6xQ2hnSKVzR3prcURNlSdGnblyp4i8gCJbSoFcpqw3FKAtXGDkf0UZJQyYtgqVnSyUapmkZgCar3cJd1Ve0+hq4gZdHYP8Gli0QZqhc2cLj0neayKEHX49AC83jXNMFy+8af3MDSvek8APOrQWAEeM2FsudiO51EZuwVGzMNgFi9meNgD6lRAAr1Qoo2TdXomS83vNBPK/Il0zkSzhHSRkh7jWL+ezvevKCa719nRjiV9W+dxatDBtSxtokYlXhlDWTrAhC0UaQP9w2Uf8OnjmYUAGLTNtC5zMwSqBqeAy44DiekFiwCCS1qrTZzKGRcF83EQdCgj/OzXr9FVBFMVWnYN/yIfGnsSf4+VH0MAAAAASUVORK5CYII=" class="img22" style="display: none;"> <span style="color: rgb(153, 153, 153);">订单</span></a>
		 <router-link to="/personalCenter" class="mBottomNav__center" tag="a"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAqCAYAAAD8pHgAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzJmODZmZS01ZGI3LTQ1MzgtOTk5MC1iNTJhYTc0NmE4YTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkVBMjEyNkM4Mjc3MTFFODhERUVCNkNGNzU2MkE1MTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkVBMjEyNkI4Mjc3MTFFODhERUVCNkNGNzU2MkE1MTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmE0N2E2MDQtZmM1Zi1hNjQzLTllOGYtNWViNjg2OTQ5ZTgyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Njc4MDE3ZTItODAwNC0xMWU4LTk4MzIt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" class="img3"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAvCAMAAACbtxmBAAABgFBMVEUAAABuYThERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERET/yQD/yQBERERERERERET/yQD/yQBERERERERERET/yQD/yQBERERERERERET/yQBERERERERERERERERERET/yQD/yQBERERERET/yQBERET/yQBERET/yQBERET/yQBERET/yQD/yQD/yQD/yQD/yQD/yQD/yQBERERERERERET/yQBERET/yQD/yQD/yQD/yQBERET/yQD/yQD/yQD/yQD/yQD/yQBERET/yQD/yQD/yQD/yQD/yQD/yQD/yQD/yQD/yQD/yQD/yQD/yQBERET/yQD/yQD/yQBERERQTT9HRkJjWjiagSX6xQFVUD1tYjSEcSzLpBPYrQ7ouQj2wgNKSEFaUzxoXjZ+bi7DnhbSqRDktQqQeiijiCGtjx60lBvsuwZcVTt3aTHfsgzwvwU/ETC3AAAAYnRSTlMAAvwFHPZ7+fBm69tACefj0q+po3JhXUsxEQP2u5eNjExGNw378e7Btp2QgywlGAnhzcrHxr2db2lbWigP683KwoBuVVBHPTcZ7ufd1biumJJ4dnZSPS8tI6Z6Z2JfVjUVB78DPBEAAAMqSURBVEjH1dVnUxNRGAXgsyXZ9N4LGIQQ01BEwEoV7L1370kDBOl2/etuXJysmA355vh8SLmzJ29278w9+LfUc5PjPo02/0Q2WkU/js8HaDYaU3AErz1PusLOoaoCRfVECjbSH5XQy5KbzMQV82BngBwvw5Jkl3lqCRg7Nnjm5IgYOXlm8NhbSOd8tMVgQQlTtis4f2JEdIzcfoJkmLRbzAnR4cGVE+Kw228QkS1SReYTOHaxc/G7nRXWPuwLce0yYjKjXTIx2oZwvxN5v0ayTm7uCjE8hWlqCRymOhjFnCmzytqnL2JjjfV1/et9TDJgeqrGJoQYwgvRscbGhmhrclvoznrdjACQFhcV5Hy2kh57TVv1cdp0P6wZGdHa4p7+lj4fp+M4ECbD8JMsHEeQpdSM6FjlZ3GgyabQzWKU9xChgxocXPAzMCTbqmeFyWa9pb/uNj62h66Ktgdxup3kPP16PK4GqDGEG+bQCn8IsV4nd8UXroi2S5Kf5LSHoxhgCckMubAszHa48319i9tsiBY3jbVHRcpOODmJBWYAJSsnB4XZfo26b60VrgvWjbW53PUc9Cn3oDIvAShjRvxh40Nju9kSTX58z5qxNIu2DOOAmwlMpZBKi272uLrPhvH5KoAHcFEFsrRj9tbYFdGVPuYT14ThQurO0wp9AOIcx3Nx+qHo7ivJd8KwfFNcdjIEQHGwMnZRDFuE9rZqv7dZv+YSgpyGLssBTIn+PExqsgpdmY5k6mZfmTlEWMAvBX3UhdN9ZE7A62POCJVl2dNP6lYKA5yQYLDTVcHykaFHyMlyAgekIF0J3DgicwkVl/l4UYL0Jc8eEXqluhmUYEplOJCa6Zk5jQzHvTAryzb18XCPTPq8h/kk/hRmCL3+4EslQHuXIyyGu5aZuyjR7e1+WD6zyExhkfIQ/paly3Qsm+nHck5jBCam3cp3K4DhOxcQ01i0qJoQNbt0qGquDj6Bd5IsSlalVtJLzXNQammRbpfamF5q16lNw5rHTRYO1ecpMpBAL0rEZRS16oWkLs0HexW1+acnaDYR9aIflWj2lE+mwz1aPFfFf+cnWZLKZhlekpAAAAAASUVORK5CYII=" class="img33" style="display: none;"> <span style="color: rgb(153, 153, 153);">个人中心</span></router-link>
		</div>
    </div>


</template>
<script>



import {getHomeIndex} from "api/travel.js";
import {getHomeLines} from "api/travel.js";
import Swiper from "components/homeBanner"


export default {
	name:"home",
    components:{
	  Swiper,
	},

  async	created(){
	  
	let data  =	await getHomeIndex()
	this.homeNav1 = data.data.navs
	this.homeRecom1 =data.data.classified
	console.log(data.data.flash);
	this.imgs = data.data.flash;

    let data1 = await getHomeLines()
		 this.homeLinesList = data1.data.products
	},
	
	data (){
		return{
			homeNav1:[],
			homeRecom1:[],
			homeLinesList:[],
			jinxuanNavList:[1,"/jinxuan",2],
			imgs:[]
            
		}
	}
}
</script>

<style scoped >

.route-title1{
	display: block;
	height:0.62rem;
	overflow: hidden;
}
#e-content{
	height: 100%;
    padding-bottom: 1.1rem;
	position: relative;
}
.e-IndextHeaer{
	width: 100%;
	height:0.88rem;
	background: #ffd720;
	box-sizing: border-box;
	padding: 0.2rem;
}
.e-headerLocation{
	float: left;
}

.e-headerLocation span{
	font-size: 0.32rem;
}



.e-headerSearch{
	float: left;
	margin: 0  0.3rem;
	box-sizing: border-box;
	position: relative;
}
.e-search__input{
	width: 4.8rem;
	height:0.6rem;
	border: none;
	padding-left: 0.6rem;
	border-radius: 0.10rem;
}
.e-headerSearch i{
	position: absolute;
	left: 0.2rem;
	top: 0.12rem;
}
.e-headerButton{
	float: right;
}
.e-headerButton i{
	font-size: 0.6rem;
}
.e-swiper1 img{
	width: 100%
}

.e-swiper1{
	width: 100%
}
.e-Indexnav{
	width: 100%;
	height: 0.254rem;
}
.e-Indexnav{
	width: 100%;
	height:2.54rem;
	border-bottom: solid 0.02rem #ccc;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.e-Indexnav a{
	display: flex;
	width: 1.5rem;
	height: 1.06rem;
	flex-direction: column;	
	align-items: center;
}
.e-Indexnav img{
	display: inline-block;
    margin-bottom: .05rem;
    width: .7rem;
    height: .7rem;
    background: 50% no-repeat;
    background-size: cover;
    border-radius: 50%;
    overflow: hidden;
}

/* .e-SecondIndexnav{
	display: flex;
	height: 0.68rem;
	overflow-x: auto;
}
.e-SecondIndexnav a {
	display: flex;
	width: 0.80rem;
	height: 0.68rem;
	flex-direction: column;	
	align-items: center;
} */
.e-radius{

}
.e-SecondIndexnav a img{
	width: 0.58rem;
	height: 0.58rem;
}
.e-SecondIndexnav a {
	display: flex;
	width: 1.6rem;
	height: 1.36rem;
	flex-direction: column;	
	flex-shrink: 0;
    align-items: center;
    justify-content: center;
}


.e-SecondIndexnav{
    height:1.36rem;
    display: flex;
    align-items: center;
	flex-wrap: nowrap;
	overflow-x: auto;
}
.e-IndexRaider{
	position: relative;
display: block;
width: 7.5rem;
height: 1rem;
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAABkCAIAAABWyyIKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzJmODZmZS01ZGI3LTQ1MzgtOTk5MC1iNTJhYTc0NmE4YTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkYxMEVENzY4MEQwMTFFODgxODhDMjc5OTk2NzFENkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkYxMEVENzU4MEQwMTFFODgxODhDMjc5OTk2NzFENkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmE0N2E2MDQtZmM1Zi1hNjQzLTllOGYtNWViNjg2OTQ5ZTgyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Njc4MDE3ZTItODAwNC0xMWU4LTk4MzIt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) 50% no-repeat;
background-size: auto;
background-size: 7.5rem 1rem;
overflow: hidden;
}

.e-Indexrecommend img{
	width: 100%;
	height: 2.4rem;
}
.e-youhui{
	width: 100%;
	height: 3.28rem;
}
.e-youhuiHeader{
 height: 0.96rem;
 box-sizing: border-box;
 padding: 0 0.2rem;
}

.e-youhuiHeader i{
  font-size: 0.40rem;
  color: orangered;
}
.count{
	display: inline-block;
	height: 0.43rem;
	width: 0.34rem;
	border-radius: 0.04rem;
   background: #666;
   color:#fff;
   
}
.e-youhuiTitle{
	line-height: .38rem;
    font-size: .28rem;
    color: #333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.e-youhuiContent span:nth-of-type(1){
	font-size: .34rem;
    color: #ff6000;
}
.e-youhuiContent span:nth-of-type(2){
margin-left: .2rem;
font-size: .24rem;
color: #999;
text-decoration: line-through;
}

.e-youhuiContent span:nth-of-type(3){
	float: right;
	width: 1.2rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    font-size: .24rem;
    color: #444;
    border: 1px solid #444;
    border-radius: .1rem;
    background: #fed101;
}

.e-youhuiContent{
   height: 1.6rem;
}
.e-youhuiContent img{
	width:2..32rem;
	height:1.58rem;
	float: left;
	margin: 0.4rem;
 }

 .e-IndexLocal{
	 position: relative;
	 width: 100%;
	 height: 5.4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; 
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 1.8rem .3rem .28rem;
    background: #b5fcd0
 }
 .mIndexLocal__blank{
	position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: .5rem;
    background: #fff;
 }
 
 .mIndexLocal__img{
	position: absolute;
    left: .24rem;
    top: .1rem;
    display: block;
    width: 7rem;
    height: 1.48rem;
	border-radius: 0.74rem;
	/* background-image: url("e-Local.png") ;  */
    background-size: 7rem 1.48rem ;
 }
 .mIndexLocal__img__pic{
background-image: url("https://gallery.youxiake.com/Public/Data/upload/201808/03/83551533279806.png?imageslim");
position: absolute;
left: 1rem;
top: 0;
width: 4.55rem;
height: 1.48rem;
background-size: auto;
background-size: 4.55rem 1.48rem;
z-index: 10;
 }
 .mIndexLocal__img__bg{
     position: absolute;
right: 0;
top: 0;
width: 7.06rem;
height: 1.48rem;
border-radius: .74rem;
background: url("https://m.youxiake.com/static/img/img5.e4b67c9.png") 50% no-repeat;
    background-size: auto;
background-size: 7.06rem 1.48rem;
z-index: 100;
 }
 .mIndexLocal__text1{
	position: absolute;
    left: .6rem;
    top: .2rem;
    font-size: .44rem;
    color: #fff;
    z-index: 200;
 }
 .mIndexLocal__text2{
	position: absolute;
    left: .6rem;
    top: .75rem;
    font-size: .24rem;
    color: #fff;
    z-index: 200;
}
.e-LocalTop{
	display: -webkit-box;
    display: -ms-flexbox;
	display: flex;
	justify-content: space-between;
	width: 6.84rem;
	height: 2.6rem;
}
.e-LocalTop .e-topLeft{
	position: relative;
	width: 4.54rem;
	height: 2.6rem;
	float: left;
	margin-right: 0.04rem;

}
.e-topLeft span{
	position: absolute;
	left:0.4rem;
	top: 2rem;
	color: #fff

}
.e-topLeft img {
	width: 100%

} 
.e-topRight{
	width: 2.6rem;
	height: 2.26rem;
	display: flex;
	flex-direction: column;
}
.e-topRight a{
	width: 100%;
	height: 1.29rem;
}
.e-topRight a img{
	width: 100%;
	height: 1.2rem;
}
.e-daka ,.e-tubu{
	position: relative;
}

.e-daka span,.e-tubu span{
	position: absolute;
	left:0.2rem;
	top: 0.2rem;
	color: #fff
}

.e-localBottom{
	display: flex;
	width: 6.9rem;
	height: 2.rem;
}

.bottom__box{
	position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: .01rem;
    width: 2.22rem;
    height: 2.94rem;
    border-radius: .1rem;
    background: #fff;
    overflow: hidden;
}
.box__location{
	position: absolute;
	left: 0;
	top: 0;
}
.box__pic img{
	width: 2.22rem;
	height: 1.57rem;
}
.box__title{
	margin-top: .1rem;
    padding: 0 .1rem;
    line-height: .38rem;
    height: .71rem;
    font-size: .28rem;
    color: #333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
}
.box__price b{

	font-size:.32rem;
    font-weight: 400;
    color: #ff7100;
}

.e-IndexClassified {
width: 100%;

}
.mTitle{
	display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    height: .9rem;
    line-height: .9rem;
    justify-content: space-between;
}
.content__banner{
	height: 3.35rem;
    background-color: #fff9db;
    position: relative;
}

.content__banner img{
	width: 100%;
	height: 100%
}
.banner__info{
	display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    width: 100%;
    height: 1.67rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: url(/static/img/img28.86e92d0.png) 50% no-repeat;
    background-size: 100% 1.67rem;

}
.banner__title{
	margin-bottom: .2rem;
    color: #fff;
    font-size: .32rem;
    font-weight: 700;
    width: 4.34rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.banner__price{

	font-size:.32rem;
    font-weight: 400;
    color: #ff7100;
}
.content__route{
	display: flex;
	justify-content: space-around
}
.content__route a{
	position: relative;
	width: 2.22rem;
    height: 2.94rem;
    background-color: #f9f9f9;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    border-radius: .1rem;

}
.content__route .route img{
	width: 100%
}
.content__route .route__city{
	position: absolute;
	color: #fff;
	background-color:rgba(77, 63, 63, 0.5);
	border-radius: 0.1rem;
	top:0;
	left:0;
}
.content__route.desc__title{
	font-size: .26rem;
}
.content__route .desc__price span{
	font-size: 0.4rem;
	color: #ff7100;
}
.mIndexLine__header{
	display: flex;
    justify-content: space-around;
	height: .74rem;
	line-height: 0.74rem;
    background: #f7f7f9;
}

.e-IndexLine .body__line{
	position: relative;
    display: block;
    margin-bottom: .1rem;
    width: 100%;
    height: 5.6rem;
    background: #fff;
    overflow: hidden;
}

.body__line img{
	width: 100%;
}
.line__box {
	position: absolute;
    right: .1rem;
    top: 3rem;
}
.line__price{
	padding: 0 .15rem;
    min-width: 1.1rem;
    height: .36rem;
    line-height: .36rem;
    text-align: center;
    font-size: .26rem;
    color: #fff;
    background: #ffc31a;
}
.line__day{
	height: .36rem;
    line-height: .36rem;
    text-align: center;
    font-size: .26rem;
    color: #ffc112;
    background: #fff;
}
.line__title{
	padding-top: .15rem;
    font-size: .28rem;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.line__type{
	position: absolute;
	color: #fff;
	background-color:rgba(77, 63, 63, 0.5);
	border-radius: 0.05rem;
	top:.2rem;
	left:.4rem;
}
.line__desc{
	margin-top: .15rem;
    width: 100%;
    font-size: .26rem;
    color: #b4b4b4;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.line__desc span{
	display: inline-block;
    margin-right: 0 .1rem;
    padding: 0 .1rem;
    height: .35rem;
    line-height: .35rem;
    text-align: center;
    font-size: .26rem;
    font-style: normal;
    color: #fff;
    background: #f68b6e;
}
/* 底部条 */
.e-mBottomNav{
	background: #fff;
	width: 100%;
	height: 1.1rem;
	border-top: solid 0.04rem #ccc;
	display: flex;
	justify-content: space-around;
	align-items:center;
	position: fixed;
	left: 0;
	bottom: 0;
}
body{
	position: relative;
}
.e-mBottomNav a{
	display: flex;
	height: 0.9rem;
    flex-direction: column;
    align-items: center;
	 
}
.e-mBottomNav  a img{
    width: .49rem;
    height: .47rem;

}
.youhuibox{
display: inline-block;
width: 1.42rem;
height: .31rem;
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAhCAYAAAA20CJoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzJmODZmZS01ZGI3LTQ1MzgtOTk5MC1iNTJhYTc0NmE4YTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODJGRDkyMDM4MzE4MTFFOEEwNzA4QTUwNUZDRDc5MzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODJGRDkyMDI4MzE4MTFFOEEwNzA4QTUwNUZDRDc5MzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmE0N2E2MDQtZmM1Zi1hNjQzLTllOGYtNWViNjg2OTQ5ZTgyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Njc4MDE3ZTItODAwNC0xMWU4LTk4MzIt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) 50% no-repeat;
background-size: auto;
background-size: 1.42rem .31rem;
}
.e-youhuiHeader span{
    margin-right:0.2rem;
    text-align:center;
}
.nav__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 7.5rem;
    height: .9rem;
    border-bottom: 1px solid #eee;
}
.mIndexLine__nav .nav__header div {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: .9rem;
    line-height: .9rem;
    text-align: center;
    font-size: .32rem;
    color: #000;
}
.mIndexLine__nav .nav__body {
    padding-top: .2rem;
    font-size: 0;
}
.mIndexLine__nav .nav__body div {
    display: inline-block;
    margin: 0 .15rem;
        margin-bottom: 0px;
    margin-bottom: .2rem;
    width: 1.2rem;
    height: .55rem;
    line-height: .55rem;
    text-align: center;
    font-size: .22rem;
    color: #666;
    border-radius: .1rem;
    background: #f7f7f7;
} 
#homeIndex{
	position:relative;
	height: 100%;
	display: flex;
	flex-direction: column;
}  

</style>

