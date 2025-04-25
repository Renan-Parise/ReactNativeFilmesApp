import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Catálogo de Filmes' }}
      />
      <Stack.Screen
        name="movie/[imdbID]"
        options={{ title: 'Detalhes do Filme' }}
      />
      <Stack.Screen
        name="favorites"
        options={{ title: 'Meus Favoritos' }}
      />
    </Stack>
  )
}