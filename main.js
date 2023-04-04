// Задание countries and cities

fetch(
  "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json"
)
  .then((res) => res.json())
  .then((data) => {
    const countrySelect = document.getElementById("countries");
    const citySelect = document.getElementById("cities");

    for (let country of Object.keys(data)) {
      const countryOption = document.createElement("option");
      countryOption.innerText = country;
      countrySelect.append(countryOption);
    }
    countrySelect.onchange = () => {

      citySelect.innerHTML = "";

      for (const city of data[countries.value]) {
        const cityOption = document.createElement("option");
        cityOption.innerText = city;
        citySelect.append(cityOption);
      }
    };

    console.log(data);
  });

// Задание closure calc 2

fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    for (const currency in data.rates) {
      const optionFrom = document.createElement("option");
      optionFrom.innerText = currency;
      from.append(optionFrom);

      const optionTo = document.createElement("option");
      optionTo.innerText = currency;
      to.append(optionTo);
    }

    const resultSum = () => {
      const crossRate = data.rates[to.value] / data.rates[from.value];
      rate.innerText = `Кросс курс между двумя выбранными валютами составит ${crossRate}`;
      const currencyResult = (amount.value * crossRate).toFixed(2);
      result.innerHTML = `В результате вы получаете ${currencyResult} ${to.value}`;
    }
    to.onchange = resultSum;
    from.onchange = resultSum;
    amount.oninput = resultSum;

    console.log(resultSum());
  });

// Задание closure calc

fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    for (const currency in data.rates) {
      let currencyButton = document.createElement("button");
      currencyButton.innerText = currency;
      closureCalc.append(currencyButton);

      currencyButton.onclick = () => {
        const amountToConvert = prompt(
          "введите сумму валюты для  конвертации в USD"
        );
        const result = (amountToConvert / data.rates[currency]).toFixed(2);

        alert(
          `при конвертации ${amountToConvert} ${currency} вы получите ${result} USD`
        );
      };
    }

    console.log(data);
  });

// Задание noswitch

let noSwitch = (key, cases, defaultKey = "default") => {
  if (key in cases) {
    cases[key]();
  } else {
    cases.default();
  }
};

const askDrink = prompt("Що ви любите пити");

  noSwitch(askDrink, {
  воду: () => console.log("Найздоровіший вибір!"),
  чай: () => console.log("Смачна та корисна штука. Не перестарайтеся з цукром"),
  пиво: () => console.log("Добре влітку, та в міру"),
  віскі: () => {
    console.log("Та ви, батечку, естет! Не забудьте лід і сигару");
  },
  default: () => {
    console.log("знову нажрався як скотиняка?");
  },
});

// Задание switch: if

let color = prompt("Введіть колір", "");
if (color === "red") {
  document.write("<div style='background-color: red;'>червоний</div>");
  document.write(
    "<div style='background-color: black; color: white;'>чорний</div>"
  );
} else if (color === "blue") {
  document.write("<div style='background-color: blue;'>синій</div>");
  document.write("<div style='background-color: green;'>зелений</div>");
} else if (color === "green") {
  document.write("<div style='background-color: green;'>зелений</div>");
} else if (color === "black") {
  document.write(
    "<div style='background-color: black; color: white;'>чорний</div>"
  );
} else {
  document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
}

// Задание switch: sizes

const currentUkrainianSize = Number.parseFloat(
  prompt("Введите Ваш украинский размер верхней одежды")
);
switch (currentUkrainianSize) {
  case 40:
    alert("Ваш итальянский размер - 38");
    break;
  case 42:
    alert("Ваш итальянский размер - 40");
    break;
  case 44:
    alert("Ваш итальянский размер - 42");
    break;
  case 46:
    alert("Ваш итальянский размер - 44");
    break;
  case 48:
    alert("Ваш итальянский размер - 46");
    break;
  case 50:
    alert("Ваш итальянский размер - 48");
    break;
  case 52:
    alert("Ваш итальянский размер - 50");
    break;
  case 54:
    alert("Ваш итальянский размер - 52");
    break;
  default:
    alert("Не удалось определить Ваш итальянский размер");
}

// Задание comparison if

var age = +prompt("Скільки вам років?", "");

if (!age) {
  alert("чи кіборг, чи KERNESS");
} else {
  if (age < 18) {
    alert("школяр");
  } else {
    if (age < 30) {
      alert("молодь");
    } else {
      if (age < 45) {
        alert("зрілість");
      } else {
        if (age < 60) {
          alert("все ще попереду");
        } else {
          if (age > 60) {
            alert("як пенсія?");
          }
        }
      }
    }
  }
}

// ДЗ  blocks

let a = 10;
{
  let b = 20;
  {
    let c = 30;

    b++;
    a *= 10;

    //  внутри этого блока  a=100, b=21, c=30, d=undefined
  }
  {
    let c = 50;

    b += 500;
    //  внутри этого блока  a=100, b=521(тк не оглашаем по новой, а переприсваиваем в прошлом блоке , соотв
    // берем значение с прошлого блока и суммируем),
    (c = 50), (d = undefined);
  }
  {
    const a = 100500;
    const d = "value";
    // внутри этого блока  a=10500, b=521, c=undefined, d="value"
    {
      let a = -50;
      b = 1000;
      // внутри этого блока  a=-50, b=1000 (переприсвоили), c=undefined, d="value"
    }
    //a=10500, b=1000, c=undefined, d="value"
  }
  //a=100, b=1000, c=undefined, d=undefined
}
//a=100, b=undefined, c=undefined, d=undefined
