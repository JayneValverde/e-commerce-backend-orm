const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // TODO: find all categories / be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product, 
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbCataData => res.json(dbCataData))
  .catch(err => {
    console.log(err); 
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // TODO: find one category by its `id` value / be sure to include its associated Products
  Category.fineOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    include: {
      model: Product, 
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbCataData => {
    if (!dbCataData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCataData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.post('/', (req, res) => {
  // TODO: create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCataData => res.json(dbCataData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // TODO: update a category by its `id` value
  Category.update(req.body, {
    where:  {
      id: req.params.id
    }
  })
    .then(dbCataData => {
      if (!dbCataData) {
        res.status(404).json({message:'No vategory found with this id'});
        return;
      }
      res.json(dbCataData);
    })
    .catch(err => {
      console.log(err); 
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // TODO: delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCataData => {
    if (!dbCataData){
      res.status(404).json({message: 'No category found with that id'});
      return;
    }
    res.json(dbCataData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
