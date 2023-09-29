import { View, Text, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { getPersonagem } from "../../../servicos/api2";
import { useEffect, useState } from "react";
import { estilo } from './style'

export function VerPersonagem(){
    const [ personagem, setPersonagem ] = useState('')
    const [ nome, setNome ] = useState('')
    async function carregaPersonagem () {
        const personagem = await getPersonagem(nome)
        setPersonagem(personagem[0])
    }
    return(
        <View style={estilo.container}>
            <Image style={estilo.img} source={require('./../../imagens/logo2.png')} resizeMode ="contain"/>
            <TextInput style = {estilo.textoinput} onChangeText={setNome} placeholder='nome...' />
            <TouchableOpacity style = {estilo.botao} title='clique!' onPress={carregaPersonagem} resizeMode='contain'>
                <Text>Ver Informações</Text>
            </TouchableOpacity>
            {personagem?<View style={estilo.estilos} >
                            <Text>Nome: {personagem.french_name}</Text>
                            <Text>Trabalho: {personagem.job}</Text>
                            <Text>Altura: {personagem.size}</Text>
                            <Text>Idade: {personagem.age}</Text>
                            <Text>Recompensa de captura: {personagem.bounty}</Text>
                        </View>:<Text></Text>}
                        <Text style={estilo.dupla} >Dupla: Jady Pimentel e Ananda Rachelle - 513</Text>
        </View>
    )
}
