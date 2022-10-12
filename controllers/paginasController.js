import { Testimonial } from "../models/Testimonial.js";
import { Viaje } from "../models/Viaje.js";

const paginaInicio = async (req,res) => {

    try{

        const dbPromises = []
        dbPromises.push(Viaje.findAll({limit:3}));
        dbPromises.push(Testimonial.findAll({limit:3}));

        const resultado = await Promise.all(dbPromises)

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    }
    catch(error){
        console.log(error)
    }


}

const paginaNosotros = (req,res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req,res) => {

    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Proximos viajes',
        viajes
    });
}

const paginaTestimoniales = async (req,res) => {

    const testimoniales = await Testimonial.findAll();

    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

const paginaViajeIndividual = async (req,res) => {
    const { slug } = req.params

    try {
        const resultado = await Viaje.findOne({where: { slug }})
        res.render('viaje', {
            pagina: "Informacion viaje",
            resultado
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaViajeIndividual
}