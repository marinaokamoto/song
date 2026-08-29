package school.spech.songAPI;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@RestController
@RequestMapping("/song")

public class SongController {
    private final JdbcTemplate jdbcTemplate;

    public SongController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping("/create")
    public ResponseEntity<Musica> create(@RequestBody Musica musicareq) {
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

        Integer idInserido = keyHolder.getKeyAs(Integer.class);
        musicareq.setId(idInserido);
        return ResponseEntity.status(201).body(musicareq);
    }


}
