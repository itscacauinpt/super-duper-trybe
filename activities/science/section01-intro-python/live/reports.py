import json


def main():
    try:
        with open('video_game.json', 'r') as file:
            video_games = json.load(file)
    except FileNotFoundError as notfound:
        print(f'{notfound} - arquivo inexistente')

    all_consoles = set()
    for game in video_games:
        all_consoles.add(game['Release']['Console'])

    print(f'Consoles: {all_consoles}')

    all_genres = set()
    for game in video_games:
        genres = game['Metadata']['Genres']
        for genre in genres.split(','):
            all_genres.add(genre)

    print(f'Generos: {all_genres}')

    scores_by_genre = {genre: [] for genre in all_genres}
    for game in video_games:
        genres = game['Metadata']['Genres']
        score = game['Metrics']['Review Score']
        for genre in genres.split(','):
            scores_by_genre[genre].append(score)

    avg_score_by_genre = {}
    for genre, scores in scores_by_genre.items():
        avg_score_by_genre[genre] = sum(scores) / len(scores)

    print(f'Médias: {avg_score_by_genre}')

    # with open('avg_score_by_genre.json', 'w') as file:
    #     json.dump(avg_score_by_genre, file, indent=4)


# main()
if __name__ == '__main__':
    # pass
    main()
