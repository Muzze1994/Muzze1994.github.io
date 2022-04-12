import React from 'react'
import './courses.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Webbapplikation MVP',
    course_text: 'Klientgränssnitt med HTML, CSS och JavaScript. Bygga Minimal Viable Products efter kravspecifikation. \nKonsumera API med JavaScript.'
  },
  {
    avatar: AVTR2,
    name: 'Objektorienterad C#',
    course_text: 'Objektorienterad programmering och design i .NET Core och C#. Skapa console applications för att öva god programstruktur med objektorienterade principer.Testdriven utveckling.Enhetstester med ramverket xUnit..'
  },
  {
    avatar: AVTR3,
    name: 'Dynamiska Webbsystem 1',
    course_text: 'Programmera webbservern med ASP.NET Core.Klientgränssnitt och webbservern tätt sammankopplade enligt MVC.Klientgränssnitt med Razor views.Databashantering med Entity Framweork Core. Användarhantering med Identity Core.Enhetstester med ramverket xUnit.'
  },
  {
    avatar: AVTR4,
    name: 'Dynamiska Webbsystem 2',
    course_text: 'Konstruktion av REST-API.Webbservern och klientgränssnitt separerade och sammanlänkade med API.Webserver med ASP.NET Core WebAPI.Databashantering med Entity Framework Core.Användarhantering med Identity Core.Klientgränssnitt med HTML, CSS och JavaScript.'
  },
  {
    avatar: AVTR4,
    name: 'Affärsmannaskap för IT',
    course_text: 'Kursen syftar till att den studerande ska få specialiserad kunskap om och förståelse för affärsmannaskap. Kursen ska också ge kunskaper om agil utvecklingsmetodik samt förståelse för hur utvecklingsteamet systematiskt kan utveckla affärer och produkter kring en idé eller ett identifierat behov.'
  },
  {
    avatar: AVTR4,
    name: 'Moderna Webbapplikationer',
    course_text: 'Fördjupade kunskaper att bygga klientgränssnitt.Serverkommunikation med REST-API.JavaScript-ramverk React, Angular och View med fokus på React.Utveckla SPA, Single Page Application.'
  },
  {
    avatar: AVTR4,
    name: 'Webbapplikationer Med Realtidskommunikation',
    course_text: 'Realtidskommunikation med SignalR och WebSockets.SignalR Hub med ASP.NET Core.Klientgränssnit som SPA med JavaScript-bibliotek för SignalR.SPA utvecklad med React.Användning av molntjänster för driftsättning.Utföra ett utvecklingsprojekt från kravställning till leverans med agila metoder och källkodshantering.'
  },
  {
    avatar: AVTR4,
    name: 'Lärande i Arbete 1',
    course_text: 'Syftet med kursen är att den studerande ska delta i projekt på LIA-arbetsplatsen som innefattar arbete med programmering och webbutveckling.Projektet innebar att utveckla en ny komponent i ett befintligt system för visualisering av data.Applikationen är en SPA (Single Page Application).Teknikerna som användes är Aurelia front-end framework, TypeScript, KendoUI och Highcharts.'
  },
  {
    avatar: AVTR4,
    name: 'Affärsutveckling För IT',
    course_text: 'Kursens syftar till att ge kunskaper och verktyg för att bryta ner och analysera kundens behov till en värdeskapande affär. Kursen syftar även till att fördjupa kunskaperna om affärsplaner samt skapa en övergripande förståelse för utvecklingsarbetens ekonomiska förutsättningar. Detta för att kunna avgöra om en affärsidé är realiserbar, samt inordna produktutveckling i skilda faser.'
  },
  {
    avatar: AVTR4,
    name: 'Examensarbete',
    course_text: 'Syftet med kursen är att den studerande självständigt ska genomföra en studie eller ett projekt och med relevanta metoder använda, tillämpa och vidareutveckla de kunskaper, färdigheter och kompetenser som skapats och utvecklats under utbildningen. Kursen ger även orientering om vetenskapligt arbetssätt, metodval och källhantering. Kursen förläggs i slutet av utbildningen.'
  },
  {
    avatar: AVTR4,
    name: 'Lärande I Arbete 2',
    course_text: 'Syftet med kursen är att ge fördjupad erfarenhet från ett mjukvaruprojekt som hanterar analys, design och konstruktion av en mjukvara, webbapplikation eller webbsystem. Kursen syftar också till att ge specialiserad kunskap om och erfarenhet av hur ett utvecklingsprojekt genomförs i sin helhet.'
  }
]


const Courses = () => {
  return (
    <section id='courses'>
      <h5>Kurser Jag Tagit I</h5>
      <h2>.NET Webbutveckling</h2>

      <Swiper className="container courses__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
      
        {
          data.map(({ name, course_text }, index) => {
            return(
            <SwiperSlide key={index} className='course'>
              {/* <div className="client__avatar">
                <img src={avatar}/>
              </div> */}
              <h5 className='course__name'>{name}</h5>
              <small className='course__text'>
                {course_text}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Courses