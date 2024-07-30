from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from resumeuploader.models import Resume
from resumeuploader.serializer import ResumeSerializer
from rest_framework.decorators import api_view
import json

# Create your views here.

@api_view(['GET', 'POST', 'DELETE'])
def Resume_Submit(request):

    try:
        if request.method == 'POST':
            resume_serializer = ResumeSerializer(data=request.data)
            print(resume_serializer)
            
            if (resume_serializer.is_valid()):
                print("dddddd")
                resume_serializer.save()
                return JsonResponse({"message": 'Resume Submitted Successfully', "status": True}, safe=False)
            else:
                return JsonResponse({"message": 'Fail to  submit resume', "status": False}, safe=False)

    except Exception as e:
        print("Error submit:", e)
        return JsonResponse({"message": 'Fail to submit Resume', "status": False}, safe=False)



@api_view(['GET', 'POST', 'DELETE'])
def Resume_List(request):

    try:
        if request.method == 'GET':
            resume_list=Resume.objects.all()
            resume_list_serializer = ResumeSerializer(resume_list,many=True)
            # print(resume_serializer)
            return JsonResponse({"data": resume_list_serializer.data, "status": True}, safe=False)
        else:
                return JsonResponse({"data":[], "status": False}, safe=False)

    except Exception as e:
        print("Error submit:", e)
        return JsonResponse({"data":[], "status": False}, safe=False)
    
    
    
@api_view(['GET', 'POST', 'DELETE'])
def Name_by_Detail(request):

     try:
        if request.method == 'POST':
          
            resume_detail=Resume.objects.get(id=request.data['id'])
           
            resume_detail_serializer = ResumeSerializer(resume_detail,many=False)
            # return JsonResponse({"data":resume_detail_serializer.data})
            print(resume_detail_serializer.data)
            return JsonResponse({"data": resume_detail_serializer.data, "status": True}, safe=False)
        else:
                return JsonResponse({"data":[], "status": False}, safe=False)

     except Exception as e:
        print("Error submit:", e)
        return JsonResponse({"data":[], "status": False}, safe=False)

