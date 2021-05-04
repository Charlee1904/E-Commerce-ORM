const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


//get all category
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a single category
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product, as: 'category_product' }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a category
router.post('/', async (req, res) => {
    try {
     const newCategory = await Category.create(req.body);
     res.status(200).json(newCategory);
    } catch (err) {
      res.status(400).json(err)
    }
});

router.put('/:id', async (req, res) => {
 try {
   if(!req.body){
     res.status(400).json({message:'incorrect data'})
   } 

   const updateCategory = await Category.update(req.body,{
    where: {
        id:req.params.id,
       },
    }
  );

  if(!updateCategory[0]){
    res.status(404).json({message:'Category not found'})
  }
    res.status(200).json(updateCategory);
  }catch(err) {
    res.status(500).json(err);
  }
});

//delete a category
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
