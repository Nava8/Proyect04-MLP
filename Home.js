import React from "react";
import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: "https://images.unsplash.com/photo-1529693662655-5a810fda9665",
        }}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>Inicio</Text>
          <Text style={styles.description}>
          ¡Bienvenidos a nuestra página de videojuegos! Aquí podrás disfrutar de una amplia selección de los juegos más populares y emocionantes del momento. Con un diseño moderno y atractivo, nuestra página te permitirá navegar fácilmente por nuestra colección de juegos y encontrar rápidamente lo que buscas.

En nuestra galería de imágenes podrás ver capturas de pantalla de los juegos más destacados, con gráficos impresionantes y una jugabilidad emocionante. Desde los juegos más clásicos hasta los títulos más innovadores, nuestra galería te ofrecerá una vista previa de lo que te espera al jugar.

Pero eso no es todo. También hemos incluido un formulario de registro para que puedas crear una cuenta personalizada y guardar tus juegos favoritos, puntuaciones y logros. Una vez que hayas creado tu cuenta, podrás iniciar sesión y acceder a una experiencia personalizada con recomendaciones de juegos, retos y recompensas exclusivas.
          </Text>
        </View>
        <Image
          style={styles.logo}
          source={{
            uri: "https://w7.pngwing.com/pngs/977/162/png-transparent-video-game-game-controllers-gaming-miscellaneous-game-logo.png",
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 40,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 40,
  },
});

export default Home;