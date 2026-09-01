package school.spech.songAPI;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/song")

public class SongController {
    private final JdbcTemplate jdbcTemplate;

    public SongController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping("/create")
    public ResponseEntity<Musica> create(@RequestBody Musica musicareq) {
        if (
                musicareq.getMusica() == null || musicareq.getMusica().isBlank() ||
                musicareq.getArtista() == null || musicareq.getArtista().isBlank() ||
                musicareq.getAlbum() == null || musicareq.getAlbum().isBlank() ||
                musicareq.getGenero() == null || musicareq.getGenero().isBlank() ||
                musicareq.getAno() <= 0
        ) return ResponseEntity.status(400).build();

        if (alreadyExists(musicareq)) return ResponseEntity.status(409).build();

        String sql = "INSERT INTO musica (musica, artista, album, genero, ano) VALUES (?, ?, ?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(
                con -> {
                    PreparedStatement ps = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

                    ps.setString(1, musicareq.getMusica());
                    ps.setString(2, musicareq.getArtista());
                    ps.setString(3, musicareq.getAlbum());
                    ps.setString(4, musicareq.getGenero());
                    ps.setInt(5, musicareq.getAno());

                    return ps;
                }, keyHolder);

        BigInteger idInserido = keyHolder.getKeyAs(BigInteger.class);
        musicareq.setId(idInserido);
        return ResponseEntity.status(201).body(musicareq);
    }

    @GetMapping
    public ResponseEntity<List<Musica>> getAll() {
        String sql = "SELECT * FROM musica";
        List<Musica> musicas = jdbcTemplate.query(
                sql,
                new BeanPropertyRowMapper<>(Musica.class)
        );
        return ResponseEntity.status(200).body(musicas);
    }


    private Boolean alreadyExists(Musica musica) {
        String sql = "SELECT COUNT(*) FROM musica WHERE LOWER(musica) = LOWER(?)";
        Integer musicaExists = jdbcTemplate.queryForObject(
                sql,
                Integer.class, // nao precisa mapear numa nova classe, já que é só Integer
                musica.getMusica());
        Boolean exists = musicaExists == 1;
        return exists;
    }


}
