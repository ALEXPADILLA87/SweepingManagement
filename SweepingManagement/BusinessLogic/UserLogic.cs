//using SweepingManagement.DataLayer;
//using SweepingManagement.DataLayer.Repository;
//using SweepingManagement.Entities;
//using SweepingManagement.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace SweepingManagement.BusinessLogic
//{
//    public class UserLogic : GenericRepository<UserEntity>
//    {
//        public UserLogic(SweepingEntities dbContext)
//        : base(dbContext)
//        {

//        }

//        public UserModel GetUserById(int id)
//        {
//            var entity = GetById(id);
//            return new UserModel();
//        }
//    }
//}