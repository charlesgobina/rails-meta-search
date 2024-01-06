# Realtime Search

This is a simple search application built with Ruby on Rails. It allows users to search for terms and displays the results. The search results are also stored and can be viewed later.

## Features

- **Search**: Users can search for terms. The search is halted for 500ms after each input to prevent excessive requests.
- **View Search Results**: The search results are displayed in real time as the user types in the search term.
- **View Past Searches**: All past searches are stored and can be viewed on the main page. Each search can be clicked on to view the results of that search.
- **Search Analytics**: Coming Soon

## Setup

To get started with the project, clone the repository and install the necessary dependencies.

```bash
git clone <repository_url>
cd <repository_name>
bundle install
rails db:migrate
```

## Usage

To start the server, run:

```bash
rails server
```

Then, open your web browser and navigate to `http://localhost:3000` to start using the application.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)