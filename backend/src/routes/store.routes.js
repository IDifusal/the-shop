const axios = require('axios');
const express = require('express');
const router = express.Router();


const apiKey= "71212464bc6250e7fc7bd94675ad9e"

router.get('/stores', async (req, res) => {
    try {
        const response = await axios.get('https://shop.interconnecta.dev/api/stores/', {
          headers: {
            'Authtoken': apiKey
          }
        });
        res.send(response.data);
      } catch (error) {
        console.error(error);
      }
  });

router.get('/stores/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const response = await axios.get(`http://shop.interconnecta.dev/api/stores/${id}`, {
        headers: {
          'Authtoken': apiKey
        }
      });
      res.send(response.data);
    } catch (error) {
      console.error(error);
    }
});

router.delete('/stores/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.delete(`http://shop.interconnecta.dev/api/stores/${id}`, {
      headers: {
        'Authtoken': apiKey
      }
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

router.put('/stores/:id', async (req, res) => {
  const id = req.params.id;
  const store = req.body;
  try {
    const response = await axios.put(`http://shop.interconnecta.dev/api/stores/${id}`,store, {
      headers: {
        'Authtoken': apiKey
      }
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

router.post('/stores/', async(req, res) => {
  const store = req.body;
  try {
    const response = await axios.post('https://shop.interconnecta.dev/api/stores/',
      store
    , {
      headers: {
        'Authtoken': apiKey
      }
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});


module.exports = router;
