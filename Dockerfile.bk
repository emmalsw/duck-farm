FROM nginx

COPY index.html /usr/share/nginx/html
COPY favicon.ico /usr/share/nginx/favicon.ico
RUN mkdir /usr/share/nginx/html/js
RUN mkdir /usr/share/nginx/html/img
COPY js /usr/share/nginx/html/js
COPY img /usr/share/nginx/html/img
COPY nginx.conf /etc/nginx/nginx.conf
CMD chmod 777 /etc/nginx/nginx.conf

VOLUME /etc/nginx

#CMD sed -i -e 's/$PORT/'"$PORT"'/g' nginx.conf && echo "$PORT"
#COPY nginx.conf /etc/nginx/nginx.conf && chmod 777 /etc/nginx/nginx.conf
#CMD nginx -g 'daemon off;'
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
