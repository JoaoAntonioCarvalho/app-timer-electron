const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {
    criaArquivoDeCurso(nomeArquivo, conteudoArquivo){
        return jsonfile.writeFile(nomeArquivo, conteudoArquivo)
            .then(() => {
                console.log('Arquivo criado')
            }).catch((err) => {
                console.log(err);
            });
    },
    adicionaTempoAoCurso(arquivoCurso, tempoEstudado){
        let dados = {
            ultimoEstudo: new Date().toString(),
            tempo: tempoEstudado
        }

        jsonfile.writeFile(arquivoCurso, dados, {spaces: 2})
            .then(() => {
                console.log('Tempo salvo com sucesso');
            }).catch((err) => {
                console.log(err);
            })
    }
    ,salvaDados(curso, tempoEstudado){
        let arquivoCurso = `${__dirname}/data/${curso}.json`;
        if(fs.existsSync(arquivoCurso)){
            this.adicionaTempoAoCurso(arquivoCurso, tempoEstudado);
        }else{
            this.criaArquivoDeCurso(arquivoCurso, {})
                .then(() => {
                    this.adicionaTempoAoCurso(arquivoCurso, tempoEstudado);
                })
        };
    },
    pegaDados(curso){
        let arquivoCurso = `${__dirname}/data/${curso}.json`
        return jsonfile.readFile(arquivoCurso);
    },
    pegaNomeDosCursos(){
        let arquivos = fs.readdirSync(`${__dirname}/data/`);
        let cursos = arquivos.map((arquivo) => {
            return arquivo.substring(0, arquivo.lastIndexOf('.'))
        });
        return cursos;
    }
}