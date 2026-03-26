import {
  Users,
  AlertTriangle,
  MessageCircle,
  UtensilsCrossed,
  Camera,
  Handshake,
} from "lucide-react";

export default function LandingConference() {
  const registerLink = "https://steford.co/event";

  const logoSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="253" viewBox="0 0 1600 253" fill="none">
      <rect width="1600" height="253" fill="transparent"/>
      <text
        x="0"
        y="208"
        fill="#F2F2F2"
        font-family="Inter, Arial, sans-serif"
        font-size="220"
        font-weight="900"
        letter-spacing="-10"
      >СТЕФОРД</text>
    </svg>
  `;

  const logoSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`;
  const heroImageSrc = `data:image/webp;base64,UklGRqQeAABXRUJQVlA4IJgeAACwxwCdASocAlsBPsFeqE+npSQ0JVQpqoAYCWVu4WOcMVlIpqiNgz+DVAYIH1PT9uBudf09qVq6qYa22awpmMakNrIcd6BtsnXUEHroG2yddOm5CIiIiIiIiJfbjP4RimMYtzrp01p+/nmFDvuT3x/ymqNqFUB8G/1eyusuvZAzmJQ6yzlV1jOAhdtcrvvF1y4Rj0dHiK6CO2rAfzvsXJ3vQ4oCnWciBU/4rrY89U0uTDtAT8MKnA3NAJM/8c8SIEuEujHQp1awfgOZTH7lZOqqp8C1Qmc2yey+KsYrZx2Qwi9Z5KTfXTa5x/YVjx/mmb3i4maq/ah1yYSVYHFeWyV7ipZW8ckv1QvI2+jawwdpmU3XwP1Cui2G0HnYXn3n/l70BRe8oP/5yTjF71ZyHf/qzTUcuNdBdaXLVCwzhwiXawOPSnzumsWYLQq+C490NBnu/4M8oYlV0ADXmPV3kyBRxu5izuP5wj/78fzw9Kr5uiG16SWZ94rPEePPiKR4iwUymGwsAfd+8Gc1/7dBO14GXRzzvwJMrkKqSKO+MKicQ8pgam7DefqBKzvyErxzEzXNx1wSGdQ9LO9VDCl5z2nd7uvs+WNsdH96ici1cFRlRt3uSrN6BWfdyFV2PbDDImtvhy6yAEkXBiY0czjfr6LW2n/TiRNg2SIz5P+85W7jYnvO2C2IVZCqNCaEvujjwe5SS8nChyPNKMP0hrKs/914ewnORJo/MhlPCPjH8BVGPRnIuYsQe8yryuRjux3ZWiU4kjEfV5/deOmHO0JsB0aY8VzWXA8HSJ67Susodo8NGUWVRxw+IYw+4eCsLJ9ebRoi/RxncBvhwmaU4RB1NMWjCsp5vHAA5j3GtgAW+kKrhk5fFcnYhz5OdmkaaLAKRmeMCXQ/R2EjumdUFH3PTlhjGH07eUWQe++3ZF8wFlKCxfa8ifZrJH+UlQfsMwf7fV6RAYgfyibYyjk0aa22dg+6/lU4LO7ZZ3tZVb48OSvDiPLkgK3nPJ7RP1PBq2mYTy5jFGWa8+UOEwAhYjd36kq9Or7TTv4ecDOB4Juip5E88zoLssvdVhkJwjra9Do0chaYgFGsyCvUP+s2EjjDZGuWO0bJVlcq/bNbNEXMMhD+UFGEvnvkHnv+lE1AWZn9cggb2pfT5OtB/I1NT0EyBXxD02taAjF8C6X20gryFBPnAW3dkwh0Lpv1Sn9q6qqv3ZivrQnQhceho/1V+jCuv9lHF3a7iMQBE+grC1eOsmaJx0Qzeiuck0aq/ClEbEtnIS3xDeJCxADjWSqWmlLY6NH0K/h76ZK27V3JwzO1XKAUe1BDhK0uwB5B+eT7MK6UhheoVXaeBvP+v88GGVdLOqZ3Sf8uKisJ48F+epuvzUfbFDzVc9LLLd8hF47zh2uXjl3Ws1w5yjUAlfLYzS9gU4NfO8nxc2zwlTTifwRxmFyZM9tn6yF0GCLJGxYETXP9JnaAp1XZivaFnvSEVRW15SddkWuf58oMnwbvtzLpDuf6aAerG9LFD34r/XeoIbxBfM9YeazeDK1HFu/FiNZ43lVHjsMi3OxU0g8TmjsKR6MxzVDPsw1RJ+i7vy9/tVTlIr+CH/kdYmiFLtj+9s2zAxIEALAVTp4iyWYFAQoPJFWOql87+CeAQ6wlttZhwwnUzKxxHqY1cPCK2scSAp4iJdYfnRQWkoK9gHwxkrXkjgKzkZSgg7e4w7ONXcxv6EcQxo1fUrssB69weVK8VbNysh91cczMicckRobW03jWdObRICRMiXroDs4UFFkBCZhTV9JoD/NZOlWhLt9UcwUneHYdeC9K0l5mTFOWyY1I9XN9MUrxKuz2z+fcoKhW5YSUKPC0B16CrdJwVADMgl3j4WYvUxuNI2yJ6EfJ9wrTPsQfdo1LlU4pAob4qhghfTTC8rmmtTNki1Bl/rW4Kce7Z/VYjGNzWTtf41YqVxiuLc3OX8bOfYDRB7xzQOR9JbRUuDZzfRPKNt8iqgWrq7NsNxQA4/A7Wn8gGIQUCQYx5AZJzd6K0LuIRTNEP50nGdQoznLHSxjGMYxjGMYxjF/uT8JaEo+oG1/JPXQNtk66dNyERERERERERERERERERERERERERERERERERERERERERERERERERERDkAAP76RKMwARVnw/BDIyQTNh5OBjOdtAw32Nr2QDKMv1Z0B1VuuEs4HSLooMxh+eLGZkBIAYqEDB1vaMt+QSlEUIVrGUOo84Ia0JBDwAsZtgKI9okX1TJ5V73vNPoF2vC2Pe81iU+yYGGy0tMyg96LzGjPkUdFZJRDpbS4UzvahLIo9yOOsi9MFlW33tnaFp48FDCGYeb/FDbBUoFVlSx93ywhuChko9ScLwFwGix2GGsokRAwVilOAlemVg6Sz1Q6wsgIyz0BZkTMIVTv6mR+0fdQsm1NehMFuAYgrpixFzDLfaQxq7WIPglzRdTOcFiWJkNBUASgO3tcF0WSxVsVmfFli4AGzx2UJepJiqcbgJwGyVhSqBO1vLkilFXS/0Dy19MhWeIMsIAhLYWKC68ffzXbFYJMuOJBf5YoRV14D054qvkIaHeSuv2/SahphgRJ3xuY+i2tlwMUvrEbs5XJuER1/St4xU4UGhL1P0F6PjXzwaTYV2ARQgiIL5JDLsrMYnxjxv/E5s1UZ82ZfaAgazymmK2dDU2cmoGTIUxZaF3/sB6FLkE/bDIhtdiGjlyymYlC3l2/1fAu5KKwpueYAGKJ8Jor31koWNgs6qyblPmzPyLvZ1t3meyHz5hEPOxBnea34E+hExnSZZdvaQBV5qAT8jh2yi3bHbO73C8/EcT+GI6IT3SCnW5xNj4RVwNUzGJcGpkcmSCB5f4UrXc+hTLx6AY0sDbj2hcqms0GCRXUirGc3q+HZoVoDeXlmautnIP+DuihpK3t+AP+MuPpKukg0CxAkR/3l0tq+9m6gp7QmBq99afo54dPDfyg0OdlZJQmD/ojbZdaHCwsd4Wl8bElOEEEZ2n79USIXf2hSID638Q4zSKxV9oH6SsZVC21Zws8fBw8PqlJMxiNGqGT+mb+a/RMYXxtGUkVmmlG2fuvEd2Qku9GyxI/4PFRAxMEz5nU5HvH3ktEp5UK/oGhXrXJ42uQK0xDGy1l2BHox0BIhE+KtpK5N8MG5CZN+rKFfmWFl/e2qamk0dhou8H8uZ4jnZMnaydNr9x9If7r9q4RLlPfjFdnO5elBp7ye4BfWlqSxedHPwq4FMkfpbwHVSu+dAv3gFHt2dJ9vP2j5Ag4Au3DBsYZ/2sgeXyvBR1/fRmCqsTvpVlTdizNY/a2inbx8hj9+7ujdo8GybZNFnXtk9DSE4oJY+cCzHvL5hcQ++NXFPHV5k6OsSfwDps8rBTIOcnGGTR6cKGuCO/hf54qLCk2OQYOwj6CK+7GDjdjpCr6kqwkEf5fGRtLzgaTR+ie0J/TP6Rin6DgQhlPuPPg94mUuMVcDnMz5Ng4bvmEHxnsrLoneeSsD9/qSnuE/V56z85S2n0n3lreUVzrSpkV73ydSXUxyhfGJbjasYRA+LZ8GheYnDZgIGpWxsvaJHHjYV71mTEy0c6VPtsirvsNTtoFtPBJMW5mP5952H9hnYX/B/umHYgRnpZ/4e74tkCFKsrRL4dZfPv3CXorkiiFRrk7ADH+XqtPntHgllIWGGIe+cL28CamqF5fuIxLOAOEjOqN+MsZuI1VA5sBJGxB1WRW1yw1RWQj8mMocs+aWF4HFD+MThnVrkmUP0Nx8/rlMGC8TOLDsLpeoQ+PaoapoEnQCVaelWrOAeQ+XhFEtPHYr1+9/8XJh28GATAhTmSLyHJEY65/XRFYaaAeIopB3rqYzK71AMTjQKCxQcct0+9mZ1Nwr1aAUJ57Y+7aQtDzTwJAymtuGnrOa2m0jPbntWh0n2RCOs1hN2CPIQAS5QIVVVpzLNFqywtEmVrVdnWMK1ZER09PEao9mipAGYUFQul+93RNq0cd6iJCj7tUhIL6lOkP3I4tavB7h0TtMTEr6peImWvj+1XW7EQUTdx/KzPnSbZk8c8dRqsones9ts+1Z8BS3xkcWzDjw+8AypOuqV839VdLOfQTG0fopiZvTa1NZhR3qivaQUf/M4YlBRBbBKQwgHu1oaZc3BI7eoexz9elHdfgqP1L2SKh1Il0zaN8+ctiVnOQubXREzym2b5D21vrh+uAwFS1TzZJZ4XN9AI95gsEQTvP0u79anoCFqO3//LwKmMjEsioa1D084upA9FJNjm0xNc0i5B05gUa3krcF9UF/DYtgBNKwV9hpJVTiCZKnEZYGqXHH+TBb+wckG6IikdCWBrPJjzeF1iXlxLzv9r2tymlztOqq8wZm/gwLNfeS8Qqmh0n0oB6zjpFS5i4EAdCLAw7EJxo9PoemgCD9KQ6OJB6hzGpfzSjmhjLvDYepCmV/RXmzDY1kTZRWGoSmyCUqy5zKk4pATq712omvAv7sXMuRbQmLPpM84CMrPJkLAfsf49PM74XYusZcq06D9Fy6DiF2HBCH/S5MWzDkLvsRHDJLnTb4I42kJpcu6NPCMzudFzo+mB6PoIgM/Pg2B7r0zBfW+JpS3+cqB2V+rjtB0TkIfRpwzdQMHO73/3/HlxBU3A7VQxa9P2Y+/mLpWfJfjJ164zv0mIelw3NDTSEGJYPfO1V61JgkF0o6it2a37y+z3otGrKrHQVDH8oIAhLpH1PYGi/xD/bMmcqd3lKhG4jEenAM1M7RPZ7sJhR7Lp/UBUfwom8EQBBHSSIWsl0i2RvB9QXIWGMRnkKT0iFhGQnj3kou0vEGZ5PHGGY6eal/IJg2Zz4Bdcqjl2MjwBEB+400erkDD3TzCkVu5SkXwsVi+UZjGyeLVM1rsoyM0b1ltm6VaEe/qLaFquZ/vnXp+L+Nw6fmNeezLuQjI6jX5PAYwxO+/nPqIfcgN7c1wU9x8heEGMPLYCNlzRNSB3UreJ7z/RPQYp1ls5sqmK/CYrXBKZ5Zm7+waTJE4mYSfs5xxC3DdH/2dQ8svBAASdP6rslQCrukLfs+wEHFuHeim/m37FvvbgDdnUxCjcUlo9IiFS8SJf+bBOrMq/PiypSlhjfy0KUtBYu2hZpy7jO5dGJHcpWRxRI5udlCcOaRxv2pWbQ4kaTtI26Spq1SxO0dGyBJHsdazz37Xt/PhlxZNRhRuU46kliSv3fr3Ju8Y9gbKHc+mseF7ytruHl601HLvb8LZ6PpA0Dyft2nJ2AZuNA6iGa0HPddkPE7kSu8r9DfUPYrktdJNYAN60/Zih98LG9PLgDC8L56x+tgCCepOqqHomLrajON1OOVFvcB3oDObyb8d6De9SNC4JeSZv/2/ZUv56ZoucjAHPm+WhMHM5mX20/NHshFtNSkbpQ+myA54j3q7riXFmo8yXuizyYRho64p+/xjzUvAw43dMMxadkHv9eCj2qgYV/JKm7mUIcFlBoMirgiMMpnzon/3jQq6nksYtLQaIdwpUMVk7kFGcMTIqsThNVHVvC7UTH37RZNBG5TZOLgiB8XK7YIFJEt1sE5VweflXyKfqv5au1rkGfeZHlbkWQMhpAN2KqtMWaduD80TVn5fXkX8xRF/XUxf8GnyFhmM9O1W5LaWTxDJh5JuWhItT+jUqLanDlkomwc6O+QQ3bSq2/IaqXie6/mE1tv7tDqch9w3WmPgytzPJ3qLkP/jds7izMtGQeHC/X4y/HNbe7bbhHSucmo4AbaMZQWR8ayi3Xe3NrjVrC+W2G3PZZiP9ePeINLhO04P6qx0iWdCr9H/7UNIC9kD1VOhtVIaYXUJjwOq41W6LJtjc/lCCWyDLZeItu9cv8O4LcMJCWtB5dvX5dI6gxAQZdYwEkzDyKyxLOJpxrF419NsQlvJUEuJE1SPxcE+GHatJXCJMSQZEILoDskqH1uxLMDoPaLFFxR+DIQksluBRncS72z9EbuRHSmeYkS7jOuLAN2A0q/ADs4yHEp7CRr0Rdw5+QAxrWdFXiWUi0o+RKd7wD8aSuVbMVgHHy/yiK9pc/S1YDF3TIhbSUxYEYDUvjYX2EOCLZAySMMQlW6SqAzajTS0y8QQvhpZV7OqGeyuJUhLzfjQ3Jw1lzJTOlYjXkpZT67k3YHXQIIgIK65UQZcth2YbdpGbRxmcHnk6CBaibtGOQz29ksFrxtncOEzsBdbNvZiDoLcjwlTFbHlYsUtvaw3Z/2T2nH2S5nLlASDeEVOl3cj9qYjbSo59f4chZuQqZdTOVcH2Yml43bLlkvHkPPcUSZ657Qr1mOGU/5+4bHRZIYFPjd4skAMV/Yxhca6RFH0P0lWZ6wkiB/c1ERIRANP5ZLHSKNEGVmY02NQZ0cn+alYNMkBwmQmmdRSS6Eo7xYdW1XRkJS+aHBmWO37xsjY9Rx/0GZTsmHLcL/Pk3V2VgYgH7ZsMPPbXXwMD5zWHE2XTteV6z28juMeTNjRlo1uJxgcwJaxzMjPNmuyk2qyFsYgvv9OUk15qYUDYTCqsZ/yj+b3LNUPG9GZlwXPZypppQ/xTJ4QC4+fPPlBSj+Z5u4J7RTSbOJNy4dUfp6zuD5r+i4sG+6nVwPkc2TLclascv71yBkcEDAOfiWVIlMPUrJzxBrU18Tzx/VoeIja4TkPq5xkURap2fW3UHpvZk63X/itIc4mjwolouHyO/nFumjntjMsYf3ttYGxXc5lpGJVZthN0dobOvEWQP2MgJ8YnqfVniVDi52uSMK+4vcHWkwqQNzPnYSWJ7Y8BTs0y/cwYbjM+cTg4FEEOSJ+yAQc2KTinlCh2HZh812rFHmlqA/oP1Pvlk1P0k+tyozIAVO+IlpexFgDHTuElpCGc8fJ7nyDzYqSEb3wtOcwemMi/LYj21tD/Pb/v+TmT7MUZL4G8PyNopfQPou0kmlYknuHe/OUwWJNi2g8bi5MP+FiYzAFx7iASMcLYOTFmu+Cm41LVRS5tUe7yO9i4Kz1yVnK5Y8i0JnfSUYvmeVjsGwOVrXaopJMvJYRQ5Cc+853leyhrHyUwUmmSZketlPGpoIP9X+5fm6sGW6s3sleaOS25I487pQoq0PzNITXgMj6TDxrXziL9Z+NEFoJCt3uZBHZEYny2IWExqUKVeUsj33H5VX4X3o05A6Y+UvraBUYgQyuIB5lrBHo0Q+kiM5M0g3XzCiwRoi4N/XmuIb7km7MlzwGEQcJzdF2kXQ1qoCZaLY5DULGeqzdcVwIv84Tec2VcuCSF41vlkvdX67zXCb/nPjz7WEOhz1QlTP/mink8SAXWzAfkQQn4VX+UQaNkVP/4GpuFSNAaqyusYT+M3Hxm97t149k/IsjCjjPpIsaCnJAOtWWtBvbo5T5sZqzRjJ5UGS8ICU0dHInP7AT/qs8h/B4iLEuQIEjLQ1A+MI6jHreqHawbYGC3XWtetT/+fT9XLGaCuSQEm7qPOeVgikTzhVeRSQI0Tl7Hhqjt66EBu0ygRw+CW/7CiiH+qHPpxZpATgYSh2V/wzg+HVrDOF3a8dljtMhCtt/yknyFCodUhSXLAscNWCzDVZZw9V58z40koBmjm+GrmXRHTIwSsstz84hqRpDTJ0MB4nfh3SeXXgHU3SYWh5dVb7hRtutKlumI8SflnbxMJtw3bi3jgqCe/omLORalxysyjGAQMW9obX/fD9b2aL7Ap+WWl0C6rBO+7vYXEBhhbMDoGZxSmvlw4hJUdPM4PfT6eZiCan6GcZJZSJN8UXmYcOFq/Awr7Diyl0dbHensKjdM+EqzEbfUUSrJ3f5Cwwgh9EizO/3I3L6gS3JEVVsG2MmwuWjz5AAirxk7zDSK635TuZkbDErFVWkvXBEh8UOAV3Hzr3H9ofRwxDkmYNVNJeIcqH6eYL1KM67R04fC8oMOyGGTzcFdrPY6p6xD30IrJDubezff1z7aVJZ6FCAyIi7dAwDZf7JHefZ1qMeATtim+l6+RlrPfqxHduzMHcsdo/sQXXflN6HMMc7icrqNcYeK2RZ57MUKAH1006NZEVGdsSMAl7KNFlpsrifqAW5OKtst9tq9sua0oVtDPZQuOLV+1EsTpKHCf9n5/o76XvSnIRegh6OY4c+nLo2gJjdjl7UPIqqKd3bN4DTAdeBqoTXjdve7ZZEKkK8umzEWCJjyxz5z1NLTG6OmJ+qq0zmxQTqELBtS2TZnJlJtshsOItCJ0bhXfnSQPyoDfj4gioJaTAS9npTYX642Z684l8suPMEfjmESO/hi6d4GC8TF1afWsEreqp9h/qRUxAVeGKuS8uMX7w0RtHGM7intBMJFAeDGq1tJIvVCelOzC7lHSHAiaRh32PlX3lOIMMgpcNOGA2Z/Zh/vnmMGEWZprmyzaknsKYHAqGU1g0ePUjZTqST4ymeMRwaP+HoWBGU4eOiLbYqObKZR+bI9FvDGfgxGOyEzVawpnNjj1Zb3B1JxNkHHTAAKPc+3pgJeqvdB2qvuWY9Bb/rMz0hohwdWchQ5of77qUXdkhVDcGfuRUHu79plLqYBpJgHtzrTW0IuFpO7nEbB7ZSSCOEZ740fb2/M7xZIIrG3djX+w78V2WvMrDsIwFQASCZRSxn8yF6FYF7ZzN/8cu0fag/u/wPBpOl08gVH+uFDSApjY2kcahuK6tZh5CLFBWZTNhdGQYrXSPhzbrLf5et+ceT9VEYwrJeXl+BOr/KhvdnNbafNPPRFojH+RoGR6szJXx3GSfN8Ngm5BfgwXYRDk882HN4WjHWAd3axyg4nXxpgylGCIEmOXRtvv86PsQob5ZMaEXUPOvG9Fnv5YaTTA4KMcMO1u7Wgb0wk1QOowiW/M+jw7sonnAYwQM2iVNRRVTzFbKE3bBvgltkcePeh2ooi2/F6Hueq3IdiXDlG7KDr+qU7tSDCCJrseCeEd0x1bBQEjGH+eBE83BAJfky7eocEpFNijoCPIKKe6l5Ad6T5XO78RQoY5XYlJG5ReBtaYO1jpFVnQtMcLQXUmMe3wfhsj97J8bfIfw5fGORnYWu2bQtNjt58yLSoT6FFCnu+Ex/ysrRGtHMc/adGO4gstnnTePpcxWMWOxflP1mgAJ+bBu6py30fJs+KKJ8skIm8138YEzbSIyQNWjRO2oSQnMFgCfh24L/MfyGIP8X6zns/Jbg+jYz0pkye4AyxzVhp4fiZn1TepLC0f/yMaVTGLZl90dLRcxYL5PHJXCGuOmzXiyhX6k8GLuE92uQFaa+7f1R7DwiG+kRXX3oqHQEI4jOB4bBg6upSBJReYqG5RhOqr89bAZ9tInPhQAKJJunMGAHKb5/N7rtQjGMmK+TVIXd+Uq6enGdvBJ9xltUO2Zzs+/d/0S0gd9mWtc25aBCYQXKkrk605OUYTMNUJeSS9yacPK0kZ1I5Ar7DVn6rI7/eWk5qsHbM4BrjXkLDeSfagUZ2QE8voSPukiI2VuEEoJMl3wYcN3hreIPpISZeptPIchSMRXWwCgjk0xRpRFRgCPRE9mSczvUruFhLd/12bkrpMernXEw+1GLJ41D6aqnQQcCb8TRqkhGA3EmEk8el4LEbrppGyvYp1fmQEl7UMTrmMkPr29GFI3Vu8TmkCJTBIVhpUfoCED+Ul63GuHa/omyub/JY/9Dg3oMzARUN2/I+G8OzrdGTO611VL7kNu+8ip/6LOPlwDn0mv8G7wGPf7G7OYv0RJQkaoFfxhQdrUZnjoNAIjiZuEeSZ++EMejSXNPgl3TMxh6y3h1qFQGWvw9hwV2GEElongltLEaA+K40xX7TdBBBXzQFDyreyuYzNV2myejRE3o1GpA0ZCSI65OLRKVf7FThRdeTrUdaqJY6BqKRuchAcKLuroaxPrF5xYqvvlcVgIXEgwD1Dkvw6V/0/avyMdZHvRhYfgxxJUTW9NZutaUloPtlD9xtKSRoEutn09JvBFTKNlbWOhc+GP8XZZMuJpR+qyuPMytwLMX5syQtc2sQlVwB2wuFYteY+YoBa1wa25H6lwbN3fsbdulm3elADpAgxFNxDSVA8uB1p/c3lTD6DFcM+fN8ZdSQTEjR1G1D1C3FdeVv4s1w4wWY3Ck2WuEQG2HKiGRIV6wDTClMzC6BWHuaMNIvcSYFYRTUU7UGD4AucucVMz5PPPKeSzSCagg37TuHvsGt7epdQXcS/zZtvqUXuj7h/s1mDe8aC4oVgMnC5YcjkYQJ60GmLWjji7IbzTQ1lm6FeGgcRmT+b5uV+NjCR8VCrAkDqCWjNK1NZ1duZeMQQaEaIlKfxQiNGr1PxtWKi8yrWDjXc85xxpz+rcayNPUIu+QKhNUpKp33R+lTP9oVebxXcIRNmZq/KETIlp00pk0fGcEAldJ+S+sqNDNHtkE6jKt6tc24WA2bcUbhsYInD/gEVtICC1eGBLUiAAATbx3hLEJYJ9hyQ2ckAAAAAAAAAPQgAAAAAAAAAAAAAAAAAAAAAAAAAAA==`;

  const speakers = [
    {
      name: "Вероника Лысенина",
      role: "12+ лет ком.дир. в международных компаниях: FinTech, NeoBank, Blockchain и B2B-проектах.",
      subrole:
        "Эксперт по организационному развитию и управлению распределёнными командами",
      initials: "ВЛ",
    },
    {
      name: "Алексей Орлов",
      role: "Бизнес-психолог",
      subrole:
        "Эксперт в эмоциональном интеллекте предпринимателей и лидеров в команде",
      initials: "АО",
    },
    {
      name: "Юлия Якунина",
      role: "Предприниматель, коуч ICF",
      subrole:
        "Работает с лидерством, коммуникацией и личной устойчивостью руководителя",
      initials: "ЮЯ",
    },
  ];

  const mistakes = [
    "Почему коммуникация ломается даже в сильных компаниях",
    "Где на примерах Boeing, Uber, Nokia и других произошёл системный сбой",
    "Как распознавать опасные сигналы до того, как они станут кризисом",
    "Что делать руководителю, если внутри команды искажаются смыслы",
  ];

  const audience = [
    "Тимлиды",
    "Руководители",
    "Основатели IT-компаний",
    "Стартаперы",
  ];

  const features = [
    { icon: Users, text: "3 спикера" },
    {
      icon: AlertTriangle,
      text: "Разбор реальных факапов мировых корпораций",
    },
    { icon: MessageCircle, text: "Интерактив с аудиторией" },
    { icon: UtensilsCrossed, text: "Кейтеринг" },
    { icon: Camera, text: "Фотограф" },
    { icon: Handshake, text: "Новые знакомства и партнёрства" },
  ];

  const pricing = [
    { title: "До 31.03", price: "1600 ₽", active: true },
    { title: "До 02.04", price: "1800 ₽", active: false },
    { title: "В день мероприятия", price: "2500 ₽", active: false },
  ];

  return (
    <div className="min-h-screen bg-[#060606] text-white [font-family:Inter,system-ui,sans-serif]">
      <section className="relative overflow-hidden border-b border-[#29e7d0]/25 bg-black">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-4xl">
            <img
              src={logoSrc}
              alt="Стефорд"
              className="h-auto w-[220px] max-w-full md:w-[360px]"
            />
            <div className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#29e7d0]/80">
              Интерактивная конференция
            </div>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight md:text-6xl">
              7 катастроф коммуникации
            </h1>
            <p className="mt-3 text-xl font-semibold leading-tight text-[#29e7d0] md:text-4xl">
              Как слова уничтожают бизнес
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-[#29e7d0]/25 bg-[#0b0b0b]">
            <img
              src={heroImageSrc}
              alt="Спикеры конференции"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-xl font-bold leading-tight">{speaker.name}</div>
                <div className="mt-2 text-base font-medium leading-snug text-[#29e7d0]">
                  {speaker.role}
                </div>
                <div className="mt-3 text-sm leading-6 text-white/68">
                  {speaker.subrole}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl border border-[#29e7d0]/30 bg-black/35 p-6 backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
              Главное
            </div>
            <p className="mt-5 text-2xl font-semibold leading-tight">
              Увидеть системные ошибки в коммуникации на чужих кейсах — и не повторить их в своей команде.
            </p>
            <div className="mt-6 h-px bg-[#29e7d0]/35" />
            <div className="mt-6 grid gap-4">
              {mistakes.map((item) => (
                <div key={item} className="text-sm leading-6 text-white/80">
                  — {item}
                </div>
              ))}
            </div>
            <a
              href={registerLink}
              className="mt-8 inline-flex w-full items-center justify-center border border-[#29e7d0] bg-[#29e7d0] px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:opacity-90 md:w-auto"
            >
              Зарегистрироваться
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#29e7d0]/25 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <div className="text-[34px] font-extrabold uppercase leading-none md:text-[56px]">
                3 апреля / пятница / 18:00
              </div>
              <div className="mt-5 flex flex-col gap-3 text-lg text-white/78 md:text-2xl">
                <div>Волоколамская 108/2</div>
                <div>Интерактивная конференция в Стефорде</div>
              </div>
            </div>

            <div className="grid gap-3 border border-[#29e7d0]/30 p-5">
              <div className="text-sm uppercase tracking-[0.18em] text-white/45">
                Что будет
              </div>
              <div className="mt-1 grid gap-3">
                {features.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className="flex items-start gap-3 border border-white/8 bg-white/[0.02] px-4 py-3"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#29e7d0]/35 bg-[#29e7d0]/10 text-[#29e7d0]">
                        <Icon size={18} strokeWidth={2.2} />
                      </div>
                      <div className="text-base leading-7 text-white/82">
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#29e7d0]/25 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                Для кого
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="border border-[#29e7d0]/35 px-4 py-3 text-sm font-medium uppercase tracking-[0.08em] text-white/88"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                Формат
              </div>
              <p className="mt-5 text-lg leading-8 text-white/78 md:text-xl">
                Это практический разбор бизнес-катастроф, где причина не только в стратегии, рынке или продукте, а в том, как внутри компании передавались смыслы, решения и ответственность.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                Оргсбор
              </div>
              <div className="mt-4 text-4xl font-extrabold leading-none md:text-6xl">
                от 1600 ₽
              </div>
              <p className="mt-4 text-sm leading-6 text-white/60">
                Для афиши лучше оставлять короткую подачу «от 1600 ₽», а полную сетку цен показывать на лендинге.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {pricing.map((item) => (
                <div
                  key={item.title}
                  className={`border p-6 ${
                    item.active
                      ? "border-[#29e7d0] bg-[#29e7d0]/8"
                      : "border-white/12 bg-white/[0.02]"
                  }`}
                >
                  <div className="text-sm uppercase tracking-[0.14em] text-white/48">
                    {item.title}
                  </div>
                  <div className="mt-4 text-3xl font-extrabold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-[#29e7d0]/25 pt-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <img
                  src={logoSrc}
                  alt="Стефорд"
                  className="h-auto w-[160px] max-w-full opacity-95 md:w-[210px]"
                />
                <div className="mt-4 text-lg font-semibold text-white">
                  Волоколамская 108/2
                </div>
                <div className="mt-2 text-sm leading-6 text-white/65">
                  Живой формат, сильные спикеры, аудитория руководителей и пространство для полезных знакомств.
                </div>
              </div>

              <a
                href={registerLink}
                className="inline-flex items-center justify-center border border-[#29e7d0] bg-[#29e7d0] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:opacity-90"
              >
                Забронировать место
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
