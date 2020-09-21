project_name='myapp'
alias docker-compose="docker-compose -p $project_name"
alias build="docker-compose build"
alias up="docker-compose up"
alias stop="docker-compose stop"
alias spring="rm -f tmp/pids/spring.pid tmp/pids/spring.sock && up spring"
alias app="up app"
alias yarn="docker-compose run --rm app yarn"
