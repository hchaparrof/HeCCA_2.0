from django.http import JsonResponse

def mi_funcion(request):
    # Lógica de la función aquí
    resultado = 42
    print("La función se ha ejecutado correctamente",resultado)
    # Devuelve el resultado como una respuesta JSON
    return JsonResponse({'resultado': resultado})
