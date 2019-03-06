using AutoMapper;
using SweepingManagement.DataLayer.Repository;
using SweepingManagement.Entities;
using SweepingManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SweepingManagement.Controllers
{
    public class UserController : ApiController
    {
        private IGenericRepository<UserEntity> repository;

        public UserController()
        {
            this.repository = new GenericRepository<UserEntity>();
        }
        // GET api/<controller>
        public IEnumerable<UserModel> Get()
        {
            var entitiesList = repository.GetAll().ToList();
            IEnumerable<UserModel> models = entitiesList.Select(x => Mapper.Map<UserEntity, UserModel>(x));
            return models;
        }

        // GET api/<controller>/5
        public UserModel Get(int id)
        {
            var entity = repository.GetById(id);
            return Mapper.Map<UserEntity, UserModel>(entity);
        }

        // POST api/<controller>
        public object Post([FromBody]UserModel model)
        {
            try
            {
                var entity = Mapper.Map<UserModel, UserEntity>(model);
                repository.Create(entity);
                return new { success = true };

            }
            catch (Exception e)
            {
                return new { success = false };
            }
        }
        
        public object Put([FromBody]UserModel model)
        {
            try
            {
                var entity = Mapper.Map<UserModel, UserEntity>(model);
                repository.Update(entity);
                return new { success = true };

            }
            catch (Exception e)
            {
                return new { success = false };
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        public object Delete(int id)
        {
            try
            {
                repository.Delete(id);
                return new { success = true };

            }
            catch (Exception)
            {
                return new { success = false };
            }
        }
    }
}