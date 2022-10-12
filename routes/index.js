import express from 'express';
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajeIndividual, paginaViajes } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';


const router = express.Router();

router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros )

router.get('/viajes', paginaViajes )

router.get('/viajes/:slug', paginaViajeIndividual)

router.get('/testimoniales', paginaTestimoniales )

router.post('/testimoniales', guardarTestimonial )


export default router;