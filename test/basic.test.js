// подключаем встроенный тестовый раннер и модуль проверок Node.js
const test = require('node:test');
const assert = require('node:assert');

// простой тест для демонстрации — всегда проходит
test('пример теста', () => {
  assert.strictEqual(1 + 1, 2);
});
