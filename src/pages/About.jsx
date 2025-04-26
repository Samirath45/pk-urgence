
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainHeader from "./MainHeader";

const About = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: "#1791c8",  marginTop:"10%" }}>
        À propos de <span style={{ color: "#1791c8" }}>Parakou Vibe</span>
      </h2>
      <Row>
        <Col md={12}>
          <p className="fs-5">
            <strong>
              <span style={{ color: "#1791c8" }}>Parakou Vibe</span> est une
              plateforme créée pour rassembler tous les bons plans, événements,
              et lieux incontournables de Parakou. Notre mission est de
              valoriser la culture locale, promouvoir les lieux tendance et
              connecter les habitants à travers des expériences uniques.
            </strong>
          </p>
          <p className="fs-5">
            Que vous soyez un habitant, un visiteur ou un curieux, vous
            trouverez ici toutes les informations nécessaires pour profiter
            pleinement de la vie à Parakou !
            <br />
            <em>
              <span style={{ color: "#1791c8" }}>
                Parakou Vibe – Une vitrine digitale pour la perle du Nord Bénin
              </span>
            </em>
          </p>
          <p className="fs-5">
            <span style={{ color: "#1791c8" }}>
              Parakou Vibe
            </span>{" "}
            est une plateforme web innovante dédiée à la promotion des
            richesses culturelles, touristiques et sociales de Parakou, la plus
            grande ville du nord du Bénin. Pensé comme un guide interactif et
            communautaire, ce projet vise à connecter les habitants, visiteurs et
            curieux à tout ce que la ville a de meilleur à offrir : lieux
            emblématiques, événements culturels, restaurants, espaces de loisirs,
            et plus encore.
            <br />
            À travers une interface moderne et intuitive, <span style={{ color: "#1791c8" }}>Parakou Vibe</span>{" "}
            vous permet de découvrir les bons plans de la ville, d’explorer des
            cartes interactives, de consulter les avis des utilisateurs, et même
            de contribuer activement à la dynamique locale en partageant vos
            propres expériences. Que vous soyez un habitant de longue date ou un
            voyageur de passage, <span style={{ color: "#1791c8" }}>Parakou Vibe</span> vous accompagne pour
            vivre la ville intensément.
          </p>

          <h5 className="mt-4" style={{ color: "#1791c8" }}>
            Un peu d’histoire – Parakou, entre tradition et modernité
          </h5>
          <p className="fs-5">
            Située stratégiquement sur l’axe Cotonou-Malanville, Parakou est une
            ville historique fondée au XIXᵉ siècle par les commerçants Dendi. Son
            nom, qui signifie "La ville de l'hospitalité" en langue locale,
            reflète parfaitement l’âme chaleureuse de ses habitants.
          </p>
          <p className="fs-5">
            Parakou s’est rapidement imposée comme un carrefour commercial majeur
            grâce à sa position géographique. Son marché international est l’un des
            plus animés du pays, attirant des commerçants de tout le Bénin, du
            Niger, du Nigéria et d’ailleurs. La ville est aussi un centre
            universitaire important, accueillant chaque année des milliers
            d’étudiants venus de toutes les régions.
          </p>
          <p className="fs-5">
            Riche de son brassage ethnique, Parakou est un creuset culturel où
            cohabitent en harmonie traditions ancestrales, religions diverses, et
            influences modernes. De ses danses traditionnelles comme le Têkê à ses
            festivals urbains et ses nouveaux espaces culturels, la ville est en
            perpétuelle effervescence.
          </p>
          <p className="fs-5">
            <span style={{ color: "#1791c8" }}>
              Parakou Vibe
            </span> s’inscrit donc dans une volonté de faire rayonner cette ville
            dynamique, en valorisant son histoire, sa modernité, ses talents et
            son potentiel touristique, pour la faire découvrir au monde entier.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
