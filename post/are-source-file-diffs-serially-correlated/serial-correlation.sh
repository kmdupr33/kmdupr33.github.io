#!/bin/bash

months=('May-2019:June-2019' 'June-2019:July-2019' 'July-2019:Aug-2019' 'Aug-2019:Sept-2019' 'Sept-2019:Oct-2019' 'Oct-2019:Nov-2019' 'Nov-2019:Dec-2019' 'Dec-2019:Jan-2020' 'Jan-2020:Feb-2020' 'Feb-2020:March-2020' 'March-2020:April-2020' 'April-2020:May-2020')

split_month_pair() {
  echo $(cut -d : -f $1 <<<$2)
}

first_commit_of_month() {
  echo $(git log --format=format:%H --after="$1" --before="$2" | tail -n 1)
}

last_commit_of_month() {
  echo $(git log --format=format:%H --after="$1" --before="$2" | head -n 1)
}
echo "Month Lines-Added Lines-Deleted Path"
for month_pair in "${months[@]}"; do
  after=$(split_month_pair 1 "$month_pair")
  before=$(split_month_pair 2 "$month_pair")
  first=$(first_commit_of_month "$after" "$before")
  last=$(last_commit_of_month "$after" "$before")
  if [ -z $first ]; then
    continue
  fi
  git --no-pager diff --diff-filter=ACDM --numstat $first $last |
    grep "\.js$" |
    grep -v "index\.js" |
    sed -E 's/([A-Za-z]+) ([A-Za-z]+)/\1-\2/g' | # replaces " " with "-" for file paths
    xargs -I {} echo "$after:$before {}"
done
