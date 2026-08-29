package school.spech.songAPI;

public class Musica {
    private Integer id;
    private String musica;
    private String artista;
    private String album;
    private String genero;
    private Integer ano;

    public Musica() {
    }

    public Musica(Integer id, String musica, String artista, String album, String genero, Integer ano) {
        this.id = id;
        this.musica = musica;
        this.artista = artista;
        this.album = album;
        this.genero = genero;
        this.ano = ano;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMusica() {
        return musica;
    }

    public void setMusica(String musica) {
        this.musica = musica;
    }

    public String getArtista() {
        return artista;
    }

    public void setArtista(String artista) {
        this.artista = artista;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }
}


