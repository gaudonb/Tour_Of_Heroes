var express = require('express');
var router = express.Router();

var hero = require('./models/Heroes');

var hero_controller = require('./controllers/hero');

//Heroes API's
router.get('/api/heroes', hero_controller.getHeroes);
router.get('/api/heroes/:id', hero_controller.getHero);

router.post('/api/heroes', hero_controller.create);

router.put('/api/heroes', hero_controller.update);

router.delete('/api/heroes/:id', hero_controller.delete);

module.exports = router;
