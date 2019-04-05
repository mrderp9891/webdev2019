def caught_speeding(speed, is_birthday):
  if is_birthday:
    speed -= 5
  if speed <= 60:
    return 0
  if speed > 60 and speed < 81:
    return 1
  if speed > 80:
    return 2