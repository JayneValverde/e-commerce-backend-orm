const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// TODO: ------------------------------
router.get('/', (req, res) => {
  // find all categories / be sure to include its associated Products
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
 // TODO: ------------------------------
router.get('/:id', (req, res) => {
  // find one category by its `id` value / be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: 
      {
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

// TODO: ------------------------------
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCataData => res.json(dbCataData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
 // TODO: ------------------------------
router.put('/:id', (req, res) => {
  // ,update a category by its `id` value
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
